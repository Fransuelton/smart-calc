import { calculate } from "../src/js/calculate.js";
import { expect, it } from "vitest";

it("Tests Addition Operations", () => {
  expect(calculate("1+2")).toBe(3);
  expect(calculate("3+2")).toBe(5);
  expect(calculate("5+2")).toBe(7);
  expect(calculate("7+2")).toBe(9);
  expect(calculate("9+2")).toBe(11);
});

it("Tests Subtraction Operations", () => {
    expect(calculate("1-2")).toBe(-1);
    expect(calculate("3-2")).toBe(1);
    expect(calculate("5-2")).toBe(3);
    expect(calculate("7-2")).toBe(5);
    expect(calculate("9-2")).toBe(7);
});

it("Tests Multiplication Operations", () => {
    expect(calculate("1*2")).toBe(2);
    expect(calculate("3*2")).toBe(6);
    expect(calculate("5*2")).toBe(10);
    expect(calculate("7*2")).toBe(14);
    expect(calculate("9*2")).toBe(18);
});

it("Tests Division Operations", () => {
    expect(calculate("1/2")).toBe(0.5);
    expect(calculate("3/2")).toBe(1.5);
    expect(calculate("5/2")).toBe(2.5);
    expect(calculate("7/2")).toBe(3.5);
    expect(calculate("9/2")).toBe(4.5);
});

it("Tests complex operations", () => {
    expect(calculate("1+2*3")).toBe(7);
    expect(calculate("3*2-1")).toBe(5);
    expect(calculate("5/2+2")).toBe(4.5);
    expect(calculate("7-2/2")).toBe(6);
    expect(calculate("9*2+2/2")).toBe(19);
    expect(calculate("1+2*3-4/2")).toBe(5);
});

it("Tests invalid operations", () => {
    expect(calculate("1+2*")).toBe("Erro");
    expect(calculate("3*2-")).toBe("Erro");
    expect(calculate("5/2+")).toBe("Erro");
    expect(calculate("7-2/")).toBe("Erro");
    expect(calculate("9*2+2/")).toBe("Erro");
    expect(calculate("")).toBe("Erro");
    expect(calculate("1+2*3-4/")).toBe("Erro");
    expect(calculate("1+2*3-4/2+")).toBe("Erro");
});

