
import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors?: {
      primary?: string;
      secundary: string;

      background?: string;
      // text: string;

      challegeBox: {
        background: string;
      },

      text: {
        color: string;
      },
      sidebar: {
        background: string;

        button: {
          border: string;
        }
      },
      logo: {
        color: string;
      }
    }
  }
}