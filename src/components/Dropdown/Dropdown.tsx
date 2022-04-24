import React, { useState } from "react"

import { DropdownProps } from "./Dropdown.types";

import styles from './Dropdown.module.scss';
import { FiChevronDown, FiCheck } from "react-icons/fi";

export default ({ items }: DropdownProps) => {
    const [value, setValue] = useState(0);
    const [show, setShow] = useState(false);

    return (
        <div tabIndex={-1} onBlur={() => setShow(false)} className={`${styles.dropdown} ${show && styles.dropdown__focused}`}>
            <div onClick={() => setShow(!show)} className={styles.dropdown__value}>
                <span>{items[value]}</span>
                <FiChevronDown/>
            </div>
            <div className={styles.dropdown__selection}>
                {items.map((item, i) => 
                    <div onClick={(e) => {setValue(i); setShow(false)}} className={styles.dropdown__item}>
                        <span>{item}</span>
                        {i == value && <FiCheck />}
                    </div>
                )}
            </div>
        </div>
    )
}