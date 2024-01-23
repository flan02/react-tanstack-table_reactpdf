import ReactPDF from "@react-pdf/renderer";
import { FC, PropsWithChildren } from "react";

// TODO add components patched for typescript

export const Svg: FC<PropsWithChildren<ReactPDF.SVGProps>> = ({ ...props }) => (
  <ReactPDF.Svg {...props} />
);

export const G: FC<PropsWithChildren<ReactPDF.GProps>> = ({ ...props }) => (
  <ReactPDF.G {...props} />
);

export const ClipPath: FC<PropsWithChildren<ReactPDF.ClipPathProps>> = ({ ...props }) => (
  <ReactPDF.ClipPath {...props} />
);