---
title: 👨‍💻 내가 맥북을 세팅하는 방법
date: '2020-06-24'
spoiler: 💻🛠
---

> 맥북 2015년형에서 2019년형으로 바꾸는 김에 작성하는 나만의 맥북 세팅, 필수 애플리케이션 정리

## 시스템 환경설정

### 키보드

#### 키보드 > 단축키

- 이전 입력 소스 선택(한영전환)은 `command` + `space`로 변경
- Spotlight 검색 보기는 `control` + `space`로 변경

#### 키보드 > 텍스트

- 맞춤법 자동 수정 X
- 자동으로 문장을 대문자로 시작 X
- 스페이스를 두 번 눌러 마침표 추가 X

### Dock

- Dock은 오른쪽으로
- 확대 X
- 가리기 X

### 사운드

- 메뉴 막대에서 음량 보기를 체크

### 파인더

- 파인더 - 보기 - 경로 막대 표시, 상대 막대 표시
- 파인더 - 환경설정 - 고급 - 폴더우선정렬: 윈도우에서
  - 정렬 상관없이 폴더가 맨 위로 정렬

### Siri

- Siri에게 요청하기 활성화 해제

### 트랙패드

- 탭하여 클릭하기

### 기타

- 오디오 파일이 음악앱에서 안열리게 하기
  - 정보 가져오기 - 다음으로 열기 - 퀵타임 플레이어 - 모두 변경

## 필수 애플리케이션

### [Chrome](https://www.google.com/chrome)

- 세계 1등 브라우저 크롬

### [VS Code (비주얼 스튜디오 코드)](https://code.visualstudio.com/download)

- JS 개발자가 가장 많이 사용하는 IDE

#### 설치해야 하는 확장프로그램

- eslint
- prettier
- Material Theme
  - Material Theme High Contrast 사용중
- Material Icon Theme
- git lens
- git history
- Typescript React code snippets

#### 폰트

- FiraCode

#### 설정

- Settings > Format On Save 체크
- Preferences > Keyboard Shortcuts
  - 오른쪽 상단에 `Open Keyboard Shortcuts (JSON)` 클릭 후 다음 코드 추가
  - `command` + 숫자 조합으로 탭 이동 가능

<details>
<summary>설정 코드 펼치기 / 접기</summary>
<pre>
[
    {
        "key": "cmd+0",
        "command": "workbench.action.openLastEditorInGroup"
    },
    {
        "key": "cmd+1",
        "command": "workbench.action.openEditorAtIndex1"
    },
    {
        "key": "cmd+2",
        "command": "workbench.action.openEditorAtIndex2"
    },
    {
        "key": "cmd+3",
        "command": "workbench.action.openEditorAtIndex3"
    },
    {
        "key": "cmd+4",
        "command": "workbench.action.openEditorAtIndex4"
    },
    {
        "key": "cmd+5",
        "command": "workbench.action.openEditorAtIndex5"
    },
    {
        "key": "cmd+6",
        "command": "workbench.action.openEditorAtIndex6"
    },
    {
        "key": "cmd+7",
        "command": "workbench.action.openEditorAtIndex7"
    },
    {
        "key": "cmd+8",
        "command": "workbench.action.openEditorAtIndex8"
    },
    {
        "key": "cmd+9",
        "command": "workbench.action.openEditorAtIndex9"
    },
    {
        "key": "ctrl+1",
        "command": "workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "ctrl+2",
        "command": "workbench.action.focusSecondEditorGroup"
    },
    {
        "key": "ctrl+3",
        "command": "workbench.action.focusThirdEditorGroup"
    }
]
</pre>
</details>

### [Alfred 4](https://www.alfredapp.com/)

- Alfred 없이 macOS를 쓰는건 매우 불편하다.
- Mega Supporter 파워팩을 구매해서 사용하고 있다.
- 주로 Alfred의 Clipboard History, Snippets, Web Search, Workflows 기능을 사용한다.
  - Clipboard History 기능은 복사하는 내용들을 보관해준다. 텍스트, 사진 등 모두 보관해줘서 편리하다.
  - Snippets 기능은 많이 쓰는 텍스트나 이모지를 짧은 텍스트로 매핑해놓으면 편하게 사용할 수 있다.
    - `cslg` 네글자만 입력하면 `console.log({cursor});`과 같은 코드가 작성되도록 하는 등 설정할 수 있다.
- 추천 workflows는 [alfred-workflows](https://github.com/zenorocha/alfred-workflows) 참고

### [Source Tree](https://www.sourcetreeapp.com/)

- 주로 사용하는 Git GUI

### [Magnet (마그넷)](https://apps.apple.com/kr/app/magnet-%EB%A7%88%EA%B7%B8%EB%84%B7/id441258766)

- 유료 애플리케이션 (살 때는 1,200원이었는데 지금보니 3,900원이다)
- 단축키로 화면 분할을 쉽게 할 수 있게 해줌

### [Slack](https://apps.apple.com/kr/app/slack/id803453959)

- 업무용 채팅앱

### [Kakaotalk](https://apps.apple.com/kr/app/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1/id869223134)

### [Line](https://apps.apple.com/kr/app/line/id539883307)

### [Evernote](https://evernote.com/intl/ko/download)

- 막 메모하기 좋은 앱

### [Notion](https://www.notion.so/desktop)

- 정리해놓기 좋은 앱
- 에버노트랑 노션이랑 기본 메모앱이랑 같이 쓰고 있다.

### [Iterm 2](https://www.iterm2.com/)

- 기본 터미널 앱보다 멋지다.

### [Postman](https://www.postman.com/downloads/) 혹은 [Insomnia](https://insomnia.rest/download/)

- API를 개발하거나 연동할 때 유용하게 쓰는 앱들

### [Microsoft Office (Word, Powerpoint, Excel)](https://apps.apple.com/kr/app/microsoft-word/id462054704)

### [Sketch](https://www.sketch.com/get/)

- UI 디자인 앱

### [Zeplin](https://zpl.io/download-mac)

- 개발자, 디자이너 협업 툴

### [Xcode](https://apps.apple.com/kr/app/xcode/id497799835)

- For iOS 개발

### [Android Studio](https://developer.android.com/studio)

- For Android 개발

## 선택 애플리케이션

### [Final Cut Pro](https://apps.apple.com/kr/app/final-cut-pro/id424389933)

- 비싸지만 영상 편집에 편하다.

### [ScreenFlow 8](https://dynamic.telestream.net/downloads/download-screenflow.asp?prodid=screenflow)

- 화면 녹화용
- 라이센스는 동시에 한 컴퓨터에만 적용 가능
- 버전 업그레이드 하는데 또 돈 내야해서 일단 8 쓰는중

### [Dynamo](https://apps.apple.com/kr/app/dynamo/id1445910651)

- 사파리에서 유튜브, 넷플릭스 등을 키보드 단축키로 쉽게 속도 조절 가능

## CLI

### [Homebrew](https://brew.sh/index_ko)

- macOS용 패키지 매니저

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### git

### [node.js](https://nodejs.org/ko/download/)

### [npm](https://www.npmjs.com/get-npm)

- node.js 설치하면 설치됨
- node package manager

### [yarn](https://yarnpkg.com/getting-started/install)

- Facebook에서 만든 node package manager

```
npm install -g yarn
```

### [oh my zsh](https://ohmyz.sh/)

- A delightful community-driven framework for managing your zsh configuration.

## Git 권한 설정

1. 터미널에서 키 생성

```
ssh-keygen -t rsa -C {이메일}
```

2. ssh 키 등록

```
ssh-add ~/.ssh/id_rsa
```

3. 깃헙에 키 등록

- github -> settings -> SSH and GPG keys -> New SSH Key -> public key 복붙!

### 커맨드마다 passphrase 입력하기 귀찮으면

- eval `ssh-agent`로 agent를 실행
- ssh-add -K ~/.ssh/<private_key_file> 프라이빗키를 등록
- https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html 참고

## 터미널 환경 세팅

1. [iTerm 2](https://www.iterm2.com/) 설치

2. [oh my zsh](https://ohmyz.sh/) 설치

3. 다음 명령어로 기본 쉘을 `zsh`로 변경

```bash
chsh -s /usr/bin/zsh
```

4. `~/.zshrc` 파일에 들어가서 `ZSH_THEME="agnoster"`로 터미널 테마 변경

5. [ubuntu mono derivative powerline](https://github.com/powerline/fonts) 폰트 설치

iTerm 2 -> Preferences -> Profile -> Text -> Font 변경

6. 다음 레포지토리를 클론하여 `dracula` 테마 적용

```
git clone https://github.com/dracula/iterm.git
```

iTerm 2 -> Preferences -> Profile -> Color -> Color Presets 변경

7. 터미널에서 username 제거

`~/.zshrc` 파일 맨밑에 넣어주면 된다.

```bash
prompt_context() {
  emojis=("🥝" "🔥" "👑" "😎" "🐵" "🦄" "🌈" "🚀" "💡" "🎉" "🇰🇷" "🌙" "🌞")
  RAND_EMOJI_N=$(( $RANDOM % ${#emojis[@]} + 1))
  prompt_segment black default "${emojis[$RAND_EMOJI_N]} "
}
```

8. `zsh` 플러그인 `zsh-syntax-highlighting` 설치

터미널에서 사용 가능한 커맨드는 초록색, 사용 가능하지 않은 커맨드는 빨간색으로 표시해줌

```bash
# brew를 통해 설치해줍니다.
brew install zsh-syntax-highlighting
# 플러그인을 적용합니다.
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

## 참고

- 서울리안님 유튜브 https://www.youtube.com/watch?v=WP1_CrtufvY
