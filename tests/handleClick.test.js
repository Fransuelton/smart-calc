import { expect, it } from "vitest";
import { handleClick } from "../src/js/handleClick.js";

it("Tests handleClick function", () => {
    const display = { value: "" };
    handleClick("1", display);
    expect(display.value).toBe("1");
    handleClick("2", display);
    expect(display.value).toBe("12");
    handleClick("3", display);
    expect(display.value).toBe("123");
    handleClick("4", display);
    expect(display.value).toBe("1234");
    handleClick("5", display);
    expect(display.value).toBe("12345");
    handleClick("6", display);
    expect(display.value).toBe("123456");
    handleClick("7", display);
    expect(display.value).toBe("1234567");
    handleClick("8", display);
    expect(display.value).toBe("12345678");
    handleClick("9", display);
    expect(display.value).toBe("123456789");
    handleClick("0", display);
    expect(display.value).toBe("1234567890");
    handleClick("00", display);
    expect(display.value).toBe("123456789000");
    handleClick("AC", display);
    expect(display.value).toBe("");
    handleClick("1", display);
    expect(display.value).toBe("1");
    handleClick("DEL", display);
    expect(display.value).toBe("");
    handleClick("1", display);
    expect(display.value).toBe("1");
    handleClick("+", display);
    expect(display.value).toBe("1+");
    handleClick("2", display);
    expect(display.value).toBe("1+2");
    handleClick("=", display);
    expect(display.value).toBe(3);
    handleClick("AC", display);
    expect(display.value).toBe("");
    handleClick("1", display);
    expect(display.value).toBe("1");
    handleClick("+", display);
    expect(display.value).toBe("1+");
    handleClick("2", display);
    expect(display.value).toBe("1+2");
    handleClick("-", display);
    expect(display.value).toBe("1+2-");
    handleClick("3", display);
    expect(display.value).toBe("1+2-3");
    handleClick("=", display);
    expect(display.value).toBe(0);
    handleClick("AC", display);
    expect(display.value).toBe("");
    handleClick("1", display);
    expect(display.value).toBe("1");
    handleClick("+", display);
    expect(display.value).toBe("1+");
    handleClick("2", display);
    expect(display.value).toBe("1+2");
    handleClick("*", display);
    expect(display.value).toBe("1+2*");
    handleClick("3", display);
    expect(display.value).toBe("1+2*3");
});

