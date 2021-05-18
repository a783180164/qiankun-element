/*
 * @Author: your name
 * @Date: 2021-05-07 13:48:50
 * @LastEditTime: 2021-05-07 13:50:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \micro-juejin-home\src\utils\util.ts
 */
/**
 * Check if value is primitive.
 */
 export function isPrimitive(value) {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    // $flow-disable-line
    typeof value === "symbol" ||
    typeof value === "boolean"
  );
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

/**
 * Quick empty object check
 */
export function isEmptyObject(obj: Record<string, unknown>): boolean {
  for (var key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

/**
 * Remove an item from an array.
 */
export function remove(arr: Array<any>, item: unknown): Array<any> {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

/**
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
export function hasOwn(obj: Record<string, unknown>, key: string): boolean {
  return hasOwnProperty.call(obj, key);
}
