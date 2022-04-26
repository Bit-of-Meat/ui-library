import React from "react"
import { SliderProps } from './Slider.types';
import styles from "./Slider.module.scss";

export default ({ min, max, value }: SliderProps) => {
    const test = (e: any) => {
        console.log(e);
    }
    return (
        <div className={styles.bg}>
            <div className={styles.fill} style={{ width: `${value/max * 100}%` }} />
            <div className={styles.handle} style={{ left: `${value/max * 100}%` }}/>
        </div>
    )
}