import { styleModel } from "models/styleModel";

export const loader8: styleModel = {
  title: "loader8",
  scss: `.loader8 {
  width: 80%;
  height: 0.1rem;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
  margin: 100px auto;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: #333c5f;
    width: 100%;
    height: 0.1rem;
    animation: loader8-1 2s infinite;
  }
  &::after {
    content: "";
    border-radius: 50%;
    position: absolute;
    left: -0.5rem;
    top: -0.5rem;
    background: #333c5f;
    width: 1rem;
    height: 1rem;
    animation: loader8-2 2s infinite;
  }
}
@keyframes loader8-1 {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes loader8-2 {
  0% {
    left: 0;
  }
  100% {
    left: 100%;
  }
}
`,
} as const;
