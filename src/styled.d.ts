// 테마 기본 interface
import "styled-components";

declare module "styled-components"{
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}