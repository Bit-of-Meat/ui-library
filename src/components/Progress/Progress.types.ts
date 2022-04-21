export enum ProgressType {
    Achievement,
    Download
}

export interface ProgressProps {
    percent: number,
    type: ProgressType
}