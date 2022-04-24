import React from "react"
import CSSReset from "../CSSReset";
import { ProviderProps } from './Provider.types';

export default ({ children }: ProviderProps) => {
    return (
        <div>
            <CSSReset />
            {children}
        </div>
    )
}