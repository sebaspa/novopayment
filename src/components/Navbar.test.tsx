import { afterEach, describe, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import menuData from "../data/data.json";

describe("Navbar", () => {
  afterEach(cleanup);

  const {
    data,
    data: { list },
  } = menuData;

  it("should render", () => {
    render(<Navbar />);
  });

  it("should be a nav role", () => {
    render(<Navbar />);
    screen.getByRole("nav");
  });
  
  it("should be exists data element into data", () => {
    expect(data).not.toBe(undefined);
  });
  
  it("should be exist list element in data", () => {
    expect(list).not.toBe(undefined);
  });
  
  it("should render first nav option using the real api into component", async() => {
    render(<Navbar />);
    await screen.findByText("Lista de tarjetas")
    //screen.debug();
  });
});
