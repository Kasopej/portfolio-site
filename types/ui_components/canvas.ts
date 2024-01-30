import { NumberLike } from "../general";

export type LineVectors = {
    x?: number | NumberLike;
    y?: number | NumberLike;
    dx?: number | NumberLike;
    dy?: number | NumberLike;
};

export type ArcVectors = {
    r: number | NumberLike;
    dr?: number | NumberLike;
    angle: number | NumberLike;
};

export type PlotType = "line" | "arc";