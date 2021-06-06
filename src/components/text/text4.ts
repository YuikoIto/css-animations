import { styleModel } from "models/styleModel";

export const text4: styleModel = {
  title: "text4",
  scss: `.text4 {
  margin: 60px auto;
  font-size: 3.5rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
}
.text4 > span {
  color: #333c5f;
  animation: text4 2.5s infinite;
  -webkit-animation: text4 2.5s infinite;
  @for $i from 1 through 5 {
    &:nth-child(#{$i + 1}) {
      $delay: $i * 0.4 + s;
      animation-delay: $delay;
    }
  }
}
@keyframes text4 {
  0%,
  100% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.9, 1.2);
  }
  60% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.2, 0.9);
  }
}
`,
} as const;
