import { TemplateResult } from "lit-html";
import Minion from "../Minion";

export default abstract class WebComponent extends Minion
{
    abstract render(): TemplateResult;
}