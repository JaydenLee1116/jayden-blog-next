---
emoji: 📦
title: Storybook 알아보기(feat. 애드온)
date: '2024-01-16 23:00:00'
author: 제이든
tags:
categories: 잡동사니
thumbnail: /images/thumbnails/boxes.png
---

## 📦 잡동사니

하나의 키워드를 잡고 좀 편하게 정리하고 싶어 만든 `잡동사니`<br/>

> 잡동사니는 조선 후기 학자 `안정복`이 편찬한 `잡동산이(雜同散異)`에서 유래된 말이다.<br/>
> 잡동산이는 `잡기(雜記)`의 형태를 빌려온 책으로 구체적인 체계가 잡혀있지 않은 형식이다.<br/>
> 항목이 다소 난잡하고 내용의 구분이 혼동되어있다고 한다. 🤣

## 🗂️ Storybook

# Storybook이란?

UI 구성요소와 페이지를 독립적으로 구축하기 위한 프론트엔드 라이브러리입니다.

각각의 독립적인 UI 컴포넌트를 Story 형태로 작성함으로써 컴포넌트 별 UI 테스트가 가능하고 작성된 Storybook을 배포하여 공유함으로써 타팀(주로 디자인팀)과 원활한 소통을 기대할 수 있습니다.

# 왜 Storybook을 적용해야할까?

React, Vue, Angular와 같은 UI 라이브러리(혹은 프레임워크)를 통해 복잡한 서비스의 UI를 작은 컴포넌트 단위로 분리하여 개발하기 시작했습니다.

그러나 서비스의 규모가 커지면서 프론트엔드 개발자가 관리해야 할 UI 컴포넌트가 급격히 늘어나게 되었고 이를 제대로 관리하지 못하면 UI 디버깅이 어려워지며 업무 지연이 발생하게 됩니다.

이를 해결하기 위해 Storybook을 적용함으로써 작은 UI 컴포넌트의 변화를 각각의 Story로 캡쳐하여 독립적으로 관리할 수 있게 됩니다.

또한, 이를 통해 UI 로직과 비즈니스 로직을 최대한 분리할 수 있어 서비스의 확장성에 큰 도움을 줄 수 있습니다.

# Storybook 적용방법

1. Storybook init

```jsx
npx storybook@latest init // npm
yarn dlx storybook@latest init // yarn
pnpm dlx storybook@latest init // pnpm
```

- (주의) 위 명령어는 Storybook이 적용되지 않은, 이미 존재하는 프로젝트에서 실행하여 Storybook을 적용하는 명령어입니다.(즉, `프로젝트 시작 시 빈 폴더에서 실행하는 명령어가 아닙니다!`)

1. Storybook run

```jsx
npm run storybook // npm
yarn storybook // yarn
pnpm run storybook // pnpm
```

- 위 명령어를 통해 Storybook이 제공하는 로컬 개발 서버를 실행하고 브라우저를 통해 제공되는 예제 컴포넌트에 대한 Story를 확인할 수 있습니다.

## 작성 예시

아래의 컴포넌트를 가정하겠습니다.

`Button.tsx`

```tsx
import React from 'react';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
```

아래는 위의 `Button.tsx` 컴포넌트에 대한 스토리북 코드입니다.

- 파일명에 `stories`를 포함하여 Story를 작성하며 이를 감지하여 Storybook 로컬 개발 서버에서 확인할 수 있습니다.
- 주로 Story를 작성하는 컴포넌트 파일과 동일한 계층에 위치시킵니다.(마치 테스트 코드처럼)

각 항목에 대한 자세한 내용은 주석을 참고해주세요.

`Button.stories.ts`

```tsx
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// meta 변수는 작성하는 story에 대한 설정이라고 생각하시면 됩니다.
// 자세한 사항은 아래의 링크에서 확인하실 수 있습니다.
// https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
		// meta key 중 parameters의 layout에 대한 내용
    // https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
	// meta key 중 tags에 대한 내용으로 'autodocs'를 설정하면 해당 스토리에 대한 문서를 자동으로 생성합니다.
  // https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs']
	// meta key 중 argTypes에 대한 내용으로 컴포넌트의 props를 어떤 형태로 조정할지를 선택합니다.
  // https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 아래와 같이 컴포넌트에 대한 다양한 Story를 작성합니다.
// args에 전달되는 객체는 컴포넌트의 props로 전달되는 값입니다.
// https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
```

# Storybook config

## 1. `.storybook/main.ts`

이 파일은 스토리북의 설정 파일로 스토리 파일 경로, 애드온 등을 설정할 수 있습니다.
(아래는 기본 main.ts 예시 코드입니다.)

```tsx
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
```

## 2. `.storybook/preview.ts`

이 파일은 스토리북의 렌더링 설정 파일로 스토리북의 렌더링을 설정할 수 있습니다.

(아래는 기본 preview.ts 예시 코드입니다.)

```tsx
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

# Storybook Addon

스토리북에서 제공하는 다양한 애드온을 활용함으로써 더욱 편리하고 유용하게 스토리북을 사용할 수 있습니다.

## @storybook/addon-essentials

스토리북의 장점을 극대화하기 위해 엄선된 애드온 패키지로 스토리북 설치 시, 기본적으로 함께 설치됩니다.

아래의 애드온들을 포함하고 있습니다.

### @storybook/addon-actions(default)

스토리북에서 각 컴포넌트의 이벤트 핸들러에 대한 반응을 display로 확인할 수 있게 해주는 애드온입니다.

### @storybook/addon-backgrounds(default)

스토리북에서 배경 색상을 변경할 수 있게 해주는 애드온입니다.

### @storybook/addon-controls(default)

따로 복잡한 코드를 작성할 필요없이 컴포넌트의 인자와 동적으로 상호작용할 수 있는 UI를 제공하는 애드온입니다.

### @storybook/addon-docs(default)

스토리북을 document 형식으로 제공할 수 있게 해주는 애드온입니다.

### @storybook/addon-viewport(default)

작성한 스토리들에 대해서 다양한 사이즈와 레이아웃으로 볼 수 있도록 해주는 애드온입니다.

### @storybook/addon-toolbars(default)

스토리북에서 theme을 설정하고 i18n local을 적용하고 스토리들의 전역 변수를 관리할 수 있는 툴바를 추가하는 애드온입니다.

---

## [@storybook/addon-storysource](https://storybook.js.org/addons/@storybook/addon-storysource/)

스토리북에서 해당 스토리를 구현하기 위해 어떤 프로퍼티를 입력했는지 볼 수 있게 해주는 애드온입니다.

## [@storybook/addon-console](https://storybook.js.org/addons/@storybook/addon-console)

스토리에 전달한 action에 대해서 `console.log` 를 스토리북 페이지의 개발자도구에서 확인할 수 있도록 해주는 애드온입니다.

## [@storybook/addon-measure](https://storybook.js.org/addons/@storybook/addon-measure/)(v6.3 이상부터 default)

스토리북 자체에서 작성한 컴포넌트의 레이아웃을 측정하고 box model을 시각적으로 확인할 수 있도록 해주는 애드온입니다.

## [@storybook/addon-outline](https://storybook.js.org/addons/@storybook/addon-outline/)(v6.1 이상부터 default)

스토리북에서 css 레이아웃과 정렬을 시각적으로 디버깅할 수 있도록 해주는 애드온입니다.

## [@storybook/addon-designs](https://storybook.js.org/docs/sharing/design-integrations#embed-figma-in-storybook-with-the-addon)

스토리북에 Figma 파일과 해당 프로토타입을 삽입할 수 있게 해주는 애드온입니다.

## [storybook-tailwind-dark-mode](https://storybook.js.org/addons/storybook-tailwind-dark-mode)

tailwindcss의 class를 사용한 다크 모드를 지원하는 애드온입니다.

```jsx
// tailwind.config.js

module.exports = {
  darkMode: 'class', // class에 따른 darkMode 설정을 해주어야합니다.
  // ...
};
```

# Storybook with tailwindcss

vite를 사용하는 프로젝트를 가정합니다.

```jsx
// .storybook/preview.js

import '../src/index.css'; // replace with the name of your tailwind css file

// index.css에는 아래와 같은 tailwind 설정이 입력되어있어야 합니다.
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 참고

- [Storybook 공식문서](https://storybook.js.org/)
- [Storybook 배포](https://storybook.js.org/docs/sharing/publish-storybook)
- [[번역] 왜 2022년에는 스토리북일까요?](https://velog.io/@cookie004/why-storybook-in-2022)
- [Storybook 애드온](https://storybook.js.org/tutorials/intro-to-storybook/react/ko/using-addons/)
- [Storybook 애드온 깃허브](https://github.com/storybookjs/storybook/tree/master/addons)
- [Storybook with tailwindcss](https://storybook.js.org/recipes/tailwindcss#2-provide-tailwind-to-stories)
- [Storybook + Jest + RTL로 모던하게(?) 프론트엔드 단위 테스트하기](https://velog.io/@kandy1002/Storybook-Jest%EB%A1%9C-%EB%AA%A8%EB%8D%98%ED%95%98%EA%B2%8C-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%8B%A8%EC%9C%84-%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EA%B8%B0)
- [스토리북의 기능은 어디까지 활용 가능한거에요?](https://velog.io/@nasikun/%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B6%81-StoryBook%EC%9D%98-%EA%B8%B0%EB%8A%A5%EC%9D%80-%EC%96%B4%EB%94%94%EA%B9%8C%EC%A7%80-%ED%99%9C%EC%9A%A9-%EA%B0%80%EB%8A%A5%ED%95%9C%EA%B1%B0%EC%97%90%EC%9A%94)
- [BBC - 스토리북 배포 사이트](https://www.bbc.co.uk/iplayer/storybook/index.html?path=/docs/components-placeholder--docs)
