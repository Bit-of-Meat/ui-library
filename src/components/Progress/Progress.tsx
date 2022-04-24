import React from "react"

import styles from "./Progress.module.scss";
import { ProgressProps } from "./Progress.types";

export default ({ percent }: ProgressProps) => {
    return (
        <div className={styles.bg}>
            <div className={styles.fill} style={{ width: `${percent}%` }}></div>
        </div>
    )
}