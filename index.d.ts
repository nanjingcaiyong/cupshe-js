/// <reference types="node" />
import { DebouncedFunc } from 'lodash'

export declare function isElementInViewport(el?: Element):boolean;
export declare function addEventListener(target:Element, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): {remove: () => void}
export declare function getClientRect(el:Element): Record<'x'|'y'|'top'|'left', number>
export declare function scrollLoad(listener: () => void):DebouncedFunc<() => void>
export declare function disabledSrroll(el?: Element):{ remove: () => void }
export declare function queryString(string): Object
export declare function plus(...args: number[]): number
export declare function minus(...args: number[]): number
export declare function times(...args: number[]): number
export declare function div(...args: number[]): number
export declare const Storage: {
  getItem: (key: string) => any,
  setItem: (key: string, value: any, expire?: number) => void
}
export declare const Regex: Record<'HTML_NOTE' | 'REPEAT_WORD' | 'CHINESE' | 'DATE' | 'HEX' | 'BASE64' | 'STRENGTH', RegExp>

export interface CupStatic {
  isElementInViewport(el?: Element): boolean
  addEventListener(target:Element, type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): {remove: () => void}
  getClientRect(el:Element): Record<'x'|'y'|'top'|'left', number>
  scrollLoad(listener: () => void):DebouncedFunc<() => void>
  disabledSrroll(el?: Element):{ remove: () => void }
  queryString(string): Object
  plus(...args: number[]): number
  minus(...args: number[]): number
  times(...args: number[]): number
  div(...args: number[]): number
  Storage: {
    getItem(key: string): any,
    setItem(key: string, value: any, expire?: number)
  }
  Regex: Record<'HTML_NOTE' | 'REPEAT_WORD' | 'CHINESE' | 'DATE' | 'HEX' | 'BASE64' | 'STRENGTH', RegExp>
}

declare const cup: CupStatic
export default cup