---
emoji: 📖
title: (번역 및 정리) Working In Small Batches
date: '2023-11-25 13:00:00'
author: 제이든
tags: 글 문서 요약
categories: 아티클
thumbnail: /images/thumbnails/article.png
---

## 📚 Working In Small Batches

이 글은 워니님께서 공유해주신 [Working In Small Batches](https://dora.dev/devops-capabilities/process/working-in-small-batches/)를 읽고 번역하여 정리한 글입니다. 원문을 읽고 싶으신 분들은 링크를 참고해주세요.

> 원문에서는 `Working In Small Batches`를, `작은 배치`라는 표현이 조금 어색하여 `작은 단위로 작업하기`로 번역하였습니다.
>
> 혹시 번역에 오류가 있거나, 더 좋은 번역이 있다면 언제든지 알려주세요. 감사합니다. 🙏

# Working in small batches(작은 단위로 일하기)

Working in small batches is an essential principle in any discipline where feedback loops are important, or you want to learn quickly from your decisions. Working in small batches allows you to rapidly test hypotheses about whether a particular improvement is likely to have the effect you want, and if not, lets you course correct or revisit assumptions. Although this article applies to any type of change that includes organizational transformation and process improvement, it focuses primarily on software delivery.

작은 단위로 일하기는 피드백 루프가 중요하거나 의사 결정을 통해 빠르게 학습하고자 하는 모든 분야에서 필수적인 원칙입니다. 작은 단위로 작업하면 특정 개선 사항이 원하는 효과를 낼 수 있는지에 대한 가설을 빠르게 테스트할 수 있으며, 그렇지 않은 경우 가정을 수정하거나 다시 검토할 수 있습니다. 이 글은 조직 혁신 및 프로세스 개선을 포함한 모든 유형의 변화에 적용되지만, 주로 소프트웨어 분야에 초점을 맞추고 있습니다.

Working in small batches is part of lean product management. Together with capabilities like visibility of work in the value stream, team experimentation, and visibility into customer feedback, working in small batches predicts software delivery performance and organizational performance.

작은 단위로 일하기는 린 제품 관리의 한 부분입니다. 가치 흐름에서의 작업 가시성, 팀 실험, 고객 피드백에 대한 가시성 등의 기능과 함께 작은 단위로 일하기는 소프트웨어 제공 및 조직의 성과를 예측할 수 있게 합니다.

One reason work is done in large batches is because of the large fixed cost of handing off changes. In traditional phased approaches to software development, handoffs from development to test or from test to IT operations consist of whole releases: months worth of work by teams consisting of tens or hundreds of people. With this traditional approach, collecting feedback on a change can take weeks or months.

작업을 큰 규모로 일괄 처리하는 이유 중 하나는 변경 사항을 넘겨주는 데 드는 고정 비용이 크기 때문입니다. 소프트웨어 개발에 있어 기존의 단계적 접근 방식에서는 개발에서 테스트로, 테스트에서 IT 운영으로 핸드오프(작업을 넘겨주는 행위)가 전체 릴리스로 이루어지며, 수십 또는 수백 명으로 구성된 팀이 수개월에 걸쳐 작업을 수행합니다. 이러한 전통적인 접근 방식에서는 변경 사항에 대한 피드백을 수집하는 데 몇 주 또는 몇 달(긴 시간)이 걸릴 수 있습니다.

In contrast, DevOps practices, which utilize cross-functional teams and lightweight approaches, allow for software to progress from development through test and operations into production in a matter of minutes. However, this rapid progression requires working with code in small batches.

대조적으로, 여러 부서로 구성된 팀과 가벼운 접근 방식을 활용하는 데브옵스 관행은 소프트웨어가 개발에서 테스트 및 운영을 거쳐 프로덕션에 이르는 과정을 단 몇 분 만에 진행할 수 있게 해줍니다. 하지만 이렇게 빠르게 진행하려면 코드를 작은 단위로 작업해야 합니다.

Working in small batches has many benefits:

- `It reduces the time it takes to get feedback on changes, making it easier to triage and remediate problems.`
- `It increases efficiency and motivation.`
- `It prevents your organization from succumbing to the sunk-cost fallacy.`

작은 단위로 작업하면 많은 이점이 있습니다:

- 변경 사항에 대한 피드백을 받는 데 걸리는 시간이 단축되어, 문제를 분류하고 해결하기가 더 쉬워집니다.
- 효율성과 동기 부여가 높아집니다.
- 조직이 매몰 비용의 오류에 빠지는 것을 방지합니다.

> 매몰 비용: 이미 발생해서 회수할 수 없는 비용. 즉, 현재 혹은 미래 경제적 가치가 0이기에 고려할 필요가 없는 비용. 사람이 통제할 수 있는 비용이 아니다.
>
> 매몰 비용의 오류: 기회 비용과 매몰 비용을 구분하지 못하는 것. 예시로 들자면 도박 중독자들이 계속해서 도박을 하면서 이전에 잃은 돈(매몰 비용)을 포기하지 않고 "이번엔 정말 돈을 딸 수 있어. 내가 잃은 게 얼마인데..!" 하는 마음으로 더 깊이 도박에 파고드는 행위. 잃어버린 돈은 이미 돌릴 수 없는 매몰 비용인데 마치 이 매몰 비용을 기회 비용으로 생각하며 계속 임하게 되는 오류.

You can apply the small batches approach at the feature and the product level. As an illustration, a minimum viable product, or MVP, is a prototype of a product with just enough features to enable validated learning about the product and its business model.

기능 및 제품 수준에서 작은 단위로 일하기를 적용할 수 있습니다. 예를 들어 최소 실행 가능한 제품(MVP)은 제품 및 비즈니스 모델에 대한 검증된 학습을 가능하게 하는 충분한(최소한의) 기능을 갖춘 프로토타입입니다.

Continuous delivery builds upon working in small batches and tries to get every change in version control as early as possible. A goal of continuous delivery is to change the economics of the software delivery process, making it viable to work in small batches. This approach provides fast, comprehensive feedback to teams so that they can improve their work.

지속적인 배포(CD)는 작은 단위로 일하기를 기반으로 하며, 버전 관리의 모든 변경 사항을 가능한 한 빨리 적용하려고 합니다. 지속적인 배포의 목표는 소프트웨어 배포 프로세스의 경제성을 개선하여 작은 단위로 작업할 수 있게 하는 것입니다. 이 접근 방식은 팀에게 빠르고 포괄적인 피드백을 제공하여 작업을 개선할 수 있도록 합니다.

## How to work in small batches(어떻게 작은 단위로 일할 것인가)

When you plan new features, try to break them down into work units that can be completed independently and in short timeframes. We recommend that each feature or batch of work follow the agile concept of the INVEST principle:

- `Independent.` Make batches of work as independent as possible from other batches, so that teams can work on them in any order, and deploy and validate them independent of other batches of work.
- `Negotiable.` Each batch of work is iterable and can be renegotiated as feedback is received.
- `Valuable.` Discrete batches of work are usable and provide value to the stakeholders.
- `Estimable.` Enough information exists about the batches of work that you can easily estimate the scope.
- `Small.` During a sprint, you should be able to complete batches of work in small increments of time, meaning hours to a couple days.
- `Testable.` Each batch of work can be tested, monitored, and verified as working in the way users expect.

새로운 기능을 계획할 때는 짧은 시간 내에 독립적으로 완료할 수 있는 작업 단위로 나누세요. 각 기능 또는 작업은 투자 원칙의 애자일 개념을 따르는 것이 좋습니다:

- `독립성.` 작업 별로 최대한 독립적으로 만들어 팀이 어떤 순서로든 작업할 수 있도록 하고, 다른 작업과 독립적으로 배포 및 검증할 수 있어야 합니다.
- `협상 가능.` 각 작업은 반복할 수 있으며 피드백을 받으면 재협상할 수 있어야 합니다.
- `가치 있는.` 작업 개별적으로 사용이 가능하며 이해 관계자에게 어떤 가치를 제공할 수 있어야 합니다.
- `예측 가능.` 작업에 대한 충분한 정보를 통해 범위를 쉽게 추정할 수 있어야 합니다.
- `규모가 작다.` 스프린트 기간 동안 몇 시간에서 며칠 단위로 작은 시간 단위의 작업을 완료할 수 있어야 합니다.
- `테스트 가능.` 각 작업을 테스트하고, 모니터링하고, 사용자가 기대하는 방식으로 작동하는지 확인할 수 있어야 합니다.

When features are of an appropriate size, you can split the development of the feature into even smaller batches. This process can be difficult and requires experience to develop. Ideally, your developers should be checking multiple small releasable changes into trunk at least once per day.

피처의 크기가 적절한 경우, 피처 개발을 더 작은 단위로 분할할 수 있습니다. 이 과정은 어려울 수 있으며 개발 경험이 필요합니다. 이상적으로는 개발자가 하루에 한 번 이상 트렁크에 릴리스할 수 있는 여러 개의 작은 변경 사항을 확인해야 합니다.

> "이상적으로, 개발자들은 매일 적어도 한 번은 소규모로 출시 가능한 변경사항들을 메인 브랜치에 커밋할 수 있으면 좋습니다." 정도로 이해하기

The key is to start development at the service or API layer, not at the UI layer. In this way, you can make additions to the API that won’t initially be available to users of the app, and check those changes into trunk. You can launch these changes to production without making them visible to users. This approach, called dark launching, allows developers to check in code for small batches that have been completed, but for features that are not yet fully complete. You can then run automated tests against these changes to prove that they behave in the expected way. This way, teams are still working quickly and developing off of trunk and not long-lived feature branches.

중요한 것은 UI 계층이 아닌 서비스 또는 API 계층에서 개발을 시작하는 것입니다. 이 방법을 통해 앱 사용자에게는 초기에 사용할 수 없는 API 추가 사항을 만들고 이러한 변경 사항을 메인 브랜치에 커밋할 수 있습니다. 이러한 변경 사항을 사용자에게 보이지 않게 생산 환경에 출시할 수 있습니다. 이러한 접근 방식을 '다크 런칭'이라고 하며, 개발자가 아직 완전히 완성되지 않은 기능에 대해서도 완료된 소규모 작업 코드를 커밋할 수 있도록 합니다. 그런 다음 이러한 변경 사항에 대해 자동화된 테스트를 실행하여 예상대로 작동하는지 확인할 수 있습니다. 이 방법을 통해 팀은 여전히 빠르게 작업하며 오래 지속되는 기능 브랜치가 아닌 메인 브랜치에서 개발을 진행합니다.

You can also dark launch changes by using a feature toggle, which is a conditional statement based on configuration settings. For example, you can make UI elements visible or invisible, or you can enable or disable service logic. Feature-toggle configuration might be read either at deploy time or runtime. You can use these configuration settings to switch the behavior of new code further down the stack. You can also use similar technique known as branch by abstraction to make larger-scale changes to the system while continuing to develop and release off-trunk without the use of long-lived feature branches.

또한, config 설정에 기반한 조건문인 기능 단위 토글을 통해 변경 사항을 다크 런칭할 수도 있습니다. 예를 들어, UI 요소를 보이거나 보이지 않게 하거나, 서비스 로직을 활성화하거나 비활성화할 수 있습니다. 기능 토글 단위의 config는 배포 시간이나 런타임에 읽을 수 있습니다. 이러한 config 설정을 사용하여 스택 아래쪽에서 새 코드의 동작을 전환할 수 있습니다. 유사한 기술인 '추상화에 의한 브랜칭'을 사용하여 시스템에 대한 대규모 변경을 진행하면서도 오래 지속되는 기능 브랜치를 사용하지 않고 메인 브랜치에서 계속 개발하고 릴리스할 수도 있습니다.

In this approach, batches of work aren’t complete until they’re deployed to production and the feedback process has begun to validate the changes. Feedback comes from many sources and in many forms, including users, system monitoring, quality assurance, and automated tests. Your goal is to optimize for speed so that you reduce the cycle time to get changes into the hands of users. This way, you can validate your hypothesis as quickly as possible.

이 방식에서는 작업들이 프로덕션에 배치되고 피드백 프로세스가 변경 사항을 검증하기 시작할 때까지 완료되지 않습니다. 피드백은 사용자, 시스템 모니터링, 품질 보증 및 자동화 테스트를 포함한 다양한 소스와 다양한 형태로 제공됩니다. 속도에 맞게 최적화하여 사이클 시간을 단축하여 사용자의 손에 변화를 가져오도록 하는 것이 목표입니다. 이렇게 하면 가능한 한 빨리 가설을 검증할 수 있습니다.

## Common pitfalls with working in small batches(작은 단위로 작업할 때 발생하는 일반적인 함정들)

When you break down work into small batches, you encounter two pitfalls:

- `Not breaking up work into small enough pieces.` Your first task is to break down the work in a meaningful way. We recommend that you commit code independent of the status of the feature and that individual features take no more than a few days to develop. Any batch of code that takes longer than a week to complete and check is too big. Throughout the development process, it’s essential that you analyze how to break down ideas into increments that you can develop iteratively.

- `Working in small batches but then regrouping the batches before sending them downstream for testing or release.` Regrouping work in this way delays the feedback on whether the changes have defects, and whether your users and your organization agree the changes were the right thing to build in the first place.

작업을 작은 단위로 분할하면 다음과 같은 두 가지 함정에 빠집니다:

- `작업을 충분히 작게 분해하지 않는 것.` 작업을 의미 있게 분해하는 것이 당신의 첫 번째 작업입니다. 우리는 당신이 피쳐의 상태에 관계없이 코드를 커밋하고 피쳐를 개발하는 데 며칠 이상 걸리지 않기를 바랍니다. 완성하고 확인하는 데 일주일 이상 걸리는 코드 단위는 너무 큽니다. 개발 프로세스 전반에 걸쳐 아이디어를 반복적으로 개발할 수 있도록 점증적으로 분해하는 방법을 찾는 것이 중요합니다.

- `작은 단위로 작업하다가 테스트나 릴리스를 위해 다운스트림으로 보내기 전에 단위를 다시 그룹화하는 것입니다.` 이런 식으로 작업을 다시 그룹화하면 변경 사항에 결함이 있는지, 사용자와 조직이 변경 사항에 동의하는지 여부에 대한 피드백이 지연됩니다.

## Ways to reduce the size of work batches(작업 단위의 크기를 줄이는 방법)

When you slice work into small batches that can be completed in hours, you can typically test and deploy those batches to production in less than an hour. The key is to decompose the work into small features that allow for rapid development, rather than developing complex features on branches and releasing them infrequently.

작업을 몇 시간 안에 완료할 수 있는 작은 단위로 나누면 일반적으로 1시간 이내에 해당 작업 단위를 테스트하고 프로덕션에 배포할 수 있습니다. 핵심은 브랜치에서 복잡한 기능을 개발하여 드물게 릴리스하는 대신 작업을 작은 기능으로 분해하여 빠르게 개발하는 것입니다.

To improve small batch development, check your environment and confirm that the following conditions are true:

- `Work is decomposed in a way that enables teams to make more frequent production releases.`
- `Developers are experienced in breaking down work into small changes that can be completed in the space of hours, not days.`

작은 단위 개발을 개선하려면 환경을 확인하고 다음 조건이 맞는지 확인하세요:

- `팀이 프로덕션 릴리즈를 더 자주 수행할 수 있는 방식으로 작업이 세분화되어 있는지.`
- `개발자들이 며칠이 아닌 몇 시간 내에 완료할 수 있는 작은 변경 사항으로 작업을 세분화하는 데 경험이 있는지.`

To become an expert in small batch development, strive to meet each of these conditions in all of your development teams. This practice is a necessary condition for both continuous integration and trunk-based development.

작은 단위 개발의 전문가가 되기 위해서는 모든 개발 팀에서 이러한 각 조건을 충족시키려고 노력해야 합니다. 이러한 관행은 지속적 통합과 메인 브랜치 기반 개발에 모두 필수적인 조건입니다.

## Ways to measure the size of work batches(작업 단위의 크기를 측정하는 방법)

When you understand continuous integration and monitoring, you can outline possible ways to measure small batch development in your systems and development environment.

- `Application features are decomposed in a way that supports frequent releases.` How often are releases possible? How does this release cadence differ across teams? Are delays in production related to features that are larger?
- `Application features are sliced in a way that lets developers complete the work in one week or less.` What proportion of features can you complete in one week or less? What features can’t you complete in one week or less? Can you commit and release changes before the feature is complete?
- `MVPs are defined and set as goals for teams.` Is the work decomposed into features that allow for MVPs and rapid development, rather than complex and lengthy processes?

지속적 통합 및 모니터링을 이해하면, 시스템 및 개발 환경에서 작업 단위 개발을 측정하는 가능한 방법을 간략하게 파악할 수 있습니다.

- `애플리케이션 기능은 빈번한 릴리스를 지원하는 방식으로 분리되어야 합니다.` 얼마나 자주 릴리스가 가능한가요? 이 릴리스 주기는 팀마다 어떻게 다른가요? 프로덕션 지연이 더 큰 기능과 관련이 있진 않은가요?
- `애플리케이션 기능은 개발자가 1주일 이내에 작업을 완료할 수 있도록 잘게 쪼개져 있어야 합니다.` 1주일 이내에 완료할 수 있는 기능의 비율은 어느 정도인가요? 1주일 이내에 완료할 수 없는 기능은 무엇인가요? 기능이 완료되기 전에 변경 사항을 커밋하고 릴리스할 수 있나요?
- `MVP는 팀의 목표로 정의되고 설정되어야 합니다.` 작업이 복잡하고 긴 프로세스가 아닌 MVP와 빠른 개발을 가능하게 하는 기능으로 나누어져 있나요?

Your measurements depend on the following:

- `Knowing your organization’s processes.`
- `Setting goals for reducing waste.`
- `Looking for ways to reduce complexity in the development process.`

측정값은 다음에 따라 달라집니다:

- `조직의 프로세스 파악하기.`
- `낭비를 줄이기 위한 목표 설정하기.`
- `개발 프로세스의 복잡성을 줄일 수 있는 방법을 모색하기.`

# 📝 후기

이 글을 읽고 나서, 작은 단위로 일하는 것이 얼마나 중요한지 알게 되었습니다. 작은 단위로 일하면서 빠르게 피드백을 받을 수 있고, 빠르게 문제를 해결할 수 있습니다. 또한, 작은 단위로 일하면 개발자들의 효율성과 동기 부여도 높아질 수 있을 것이라 생각합니다. 한편으로는 제품의 개발 프로세스를 직접, 자주 경험해보지 못했기 때문에 이 글을 읽고 나서 더욱 더 많은 경험을 쌓아야겠다는 생각이 들었습니다. 또, 글과 같이 제품 개발 프로세스에 대한 고민을 하고 그 고민을 직접 적용하는 과정을 거칠 수 있다면 얼마나 많은 성장을 할 수 있을까 욕심이 생기게 된 계기가 되었습니다. :)
