import { styleModel } from "models/styleModel";

export const loader7: styleModel = {
  title: "loader7",
  scss: `.loader7 {
  width: 90%;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
  margin: 95px auto;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #333c5f;
    width: 100%;
    height: 0.5rem;
    animation: loader7 2s infinite;
  }
}
@keyframes loader7 {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
} 
`,
} as const;
