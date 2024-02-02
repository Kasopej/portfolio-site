<template>
  <canvas ref="canvasRef" :id="uniqueId"></canvas>
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
  const ANIMATION_INTERVAL = 50;

  onMounted(() => {
    const context = canvasRef.value?.getContext("2d");
    if (context) plotOnCanvas(context);
  });

  async function plotOnCanvas(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle =
      drawType.value === "stroke"
        ? strokeColor?.value ?? ""
        : fillColor?.value ?? "";
    const vector = clonedVectors[selectedVectorItemIndex.value];
    if (plotType.value === "line") {
      assertVectorMatchesPlotType<LineVectors>(plotType.value, vector);
      await plotLine(ctx, vector);
    }
    selectedVectorItemIndex.value++;
    if (selectedVectorItemIndex.value >= clonedVectors.length) {
      return;
    }

    requestAnimationFrame(() => plotOnCanvas(ctx));
    // setTimeout(() => plotOnCanvas(ctx), ANIMATION_INTERVAL);
  }

  async function plotLine(ctx: CanvasRenderingContext2D, vector: LineVectors) {
    try {
      const loop = 10;
      for (let i = 1; i <= loop; i++) {
        await new Promise((resolve) => {
          function plotLineVectors() {
            ctx.moveToTracked(
              resolveVectorValue(getVectorValue(vector, "x")) / loop +
                ctx.myCurrentCoordinates.x,
              resolveVectorValue(getVectorValue(vector, "y")) / loop +
                ctx.myCurrentCoordinates.y
            );

            ctx.lineToTracked(
              ctx.myCurrentCoordinates.x +
                resolveVectorValue(getVectorValue(vector, "dx")) / loop,
              ctx.myCurrentCoordinates.y +
                resolveVectorValue(getVectorValue(vector, "dy")) / loop
            );

            ctx.stroke();
            resolve(ctx);
          }
          requestAnimationFrame(plotLineVectors);
          // setTimeout(plotLineVectors, i * ANIMATION_INTERVAL);
        });
      }
    } catch (error) {
      // do nothing
    }
  }

  function getVectorValue<T extends LineVectors | ArcVectors>(
    vector: T,
    key: keyof T
  ) {
    return String(vector[key] ?? 0);
  }

  function resolveVectorValue(value: string): number {
    if (isNaN(parseInt(value, 10))) return 0;
    else {
      const strippedNumber = parseInt(value, 10);
      const strippedUnit = value.replaceAll(/[\d.-]+/g, "");

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
