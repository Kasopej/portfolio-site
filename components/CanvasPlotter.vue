<template>
  <canvas ref="canvasRef" class="absolute top-0 left-0" :id="uniqueId"></canvas>
</template>

<script setup lang="ts">
  import {
    ArcVectors,
    LineVectors,
    PlotType,
  } from "~/types/ui_components/canvas";

  interface Props {
    plotType: PlotType;
    drawType: "stroke" | "fill";
    vectors: LineVectors[] | ArcVectors[];
    fillColor?: string;
    strokeColor?: string;
  }

  const props = defineProps<Props>();
  const { plotType, vectors, strokeColor, fillColor, drawType } = toRefs(props);

  const clonedVectors = JSON.parse(JSON.stringify(vectors.value)) as
    | LineVectors[]
    | ArcVectors[];

  const canvasRef = ref<HTMLCanvasElement | null>(null);
  const uniqueId = ref(String(Date.now()));
  const selectedVectorItemIndex = ref(0);

  onMounted(() => {
    const context = canvasRef.value?.getContext("2d");
    if (context) plotOnCanvas(context);
  });

  function plotOnCanvas(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle =
      drawType.value === "stroke"
        ? strokeColor?.value ?? ""
        : fillColor?.value ?? "";
    const vector = clonedVectors[selectedVectorItemIndex.value];
    if (plotType.value === "line") {
      assertVectorMatchesPlotType<LineVectors>(plotType.value, vector);
      plotLine(ctx, vector);
      vector.x = vector.dx ?? vector.x;
      vector.y = vector.dy ?? vector.y;
    }
    selectedVectorItemIndex.value++;
    if (selectedVectorItemIndex.value >= clonedVectors.length) return;
    requestAnimationFrame(() => plotOnCanvas(ctx));
  }

  function plotLine(ctx: CanvasRenderingContext2D, vector: LineVectors) {
    ctx.moveTo(
      resolveVectorValue(getVectorValue(vector, "x")),
      resolveVectorValue(getVectorValue(vector, "y"))
    );

    ctx.lineTo(
      resolveVectorValue(getVectorValue(vector, "dx")),
      resolveVectorValue(getVectorValue(vector, "dy"))
    );

    ctx.stroke();
  }

  function getVectorValue<T extends LineVectors | ArcVectors>(
    vector: T,
    key: keyof T
  ) {
    return String(
      vector[key] ??
        (clonedVectors[selectedVectorItemIndex.value - 1] as T)?.[key] ??
        0
    );
  }

  function resolveVectorValue(value: string): number {
    if (isNaN(parseInt(value, 10))) return 0;
    else {
      const strippedNumber = parseInt(value, 10);
      console.log({ strippedNumber });
      const strippedUnit = value.replaceAll(/[\d.-]+/g, "");
      console.log({ strippedUnit });

      return convertUnit(strippedUnit, strippedNumber);
    }
  }

  function convertUnit(unit: string, value: number): number {
    switch (unit) {
      case "%":
        return canvasRef.value ? canvasRef.value.width * (value / 100) : 0;

      default:
        return value;
    }
  }

  function assertVectorMatchesPlotType<T extends LineVectors | ArcVectors>(
    type: PlotType,
    vectorType: LineVectors | ArcVectors
  ): asserts vectorType is T {
    if (type === "line") {
      vectorType = vectorType as ArcVectors;
      if (vectorType.dr || vectorType.r || vectorType.angle)
        throw new Error("vector type does not match plot type");
    } else {
      vectorType = vectorType as LineVectors;
      if (vectorType.dx || vectorType.dy || vectorType.x || vectorType.y)
        throw new Error("vector type does not match plot type");
    }
  }
</script>

<style scoped></style>
