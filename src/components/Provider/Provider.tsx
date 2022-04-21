import React from "react"
import { ProviderProps } from './Provider.types';
import "./Provider.module.scss";

export default ({ children }: ProviderProps) => {
    return (
        <div>{children}</div>
    )
}