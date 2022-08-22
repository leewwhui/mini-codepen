import { PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { RootState } from "../..";
import {
  MarkupNameSpace,
  PenInterface,
  ProjectInterface,
  ScriptNameSpace,
  StyleNameSpace,
} from "../../../type";

export const setMarkupConfigAction = (
  state: WritableDraft<ProjectInterface>,
  action: PayloadAction<MarkupNameSpace.MarkupInterface>
) => {
  state.markup = action.payload;
  return state;
};

export const setStyleConfigAction = (
  state: WritableDraft<ProjectInterface>,
  action: PayloadAction<StyleNameSpace.StyleInterface>
) => {
  state.style = action.payload;
};

export const setScriptConfigAction = (
  state: WritableDraft<ProjectInterface>,
  action: PayloadAction<ScriptNameSpace.StyleInterface>
) => {
  state.script = action.payload;
};
