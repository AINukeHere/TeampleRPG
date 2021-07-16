jsonObject=[
    {
        "classes":[
            {
                "name":"워리어",
                "image":"warrior.png",
                "spec1":2,
                "spec2":3,
                "spec3":1,
                "explanation":"근접형전투로 보조마법을 받으면서 선두에서 싸우는 클래스입니다<br>강한 체력과 적당한 공격력을 가지고있어서 여유롭게 사냥할 수 있습니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"배쉬",
                        "explanation":"적을 스턴하며 강하게 벤다",
                        "type":"공격형"
                    },
                    {
                        "command":"SS",
                        "name":"리프어택",
                        "explanation":"목표물 위로 뛰어올라 착지와 함께 공격한다.",
                        "type":"공격형"
                    }
                ],
                "jobs1":{
                    "name":"기사단장",
                    "spec1":4,
                    "spec2":4,
                    "spec3":3,
                    "explanation":"병사를 소환하여 싸우는 소환형 근접 클래스입니다<br>일반적인 전사클래스이며, 업그레이드를 잘한다면<br>탱커와 딜러 두가지역할을 모두 맡을수 있습니다.<br>※ 4라운드 이후 돈을 더 받을수 있습니다!",
                    "skills":[
                        {
                            "command":"S",
                            "name":"배쉬",
                            "explanation":"적을 스턴하며 강하게 벤다",
                            "type":"공격형"
                        },
                        {
                            "command":"SS",
                            "name":"리프어택",
                            "explanation":"목표물 위로 뛰어올라 착지와 함께 공격한다.",
                            "type":"공격형"
                        }
                    ]
                },
                "jobs2":{
                    "name":"버서커",
                    "spec1":5,
                    "spec2":2,
                    "spec3":2,
                    "explanation":"싸움에 미친 전사 . 때로는 아군까지 공격하기도 합니다.<br>하지만 파괴력은 모든 클래스 중 우위를 다툽니다",
                    "skills":[
                        {
                            "command":"S",
                            "name":"배쉬",
                            "explanation":"적을 스턴하며 강하게 벤다",
                            "type":"공격형"
                        },
                        {
                            "command":"SS",
                            "name":"리프어택",
                            "explanation":"목표물 위로 뛰어올라 착지와 함께 공격한다.",
                            "type":"공격형"
                        }
                    ]
                }
            },
            {
                "name":"위자드",
                "image":"wizard.png",
                "spec1":2,
                "spec2":1,
                "spec3":2,
                "explanation":"중거리에서 마법을 사용하며 근접클래스를 지원하는 클래스입니다<br>하지만 체력이 부실하며 , 이동속도도 느리므로 체력관리가 필요합니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"파이어볼",
                        "explanation":"적에게 볼로된 구를 날립니다."
                    },
                    {
                        "command":"SS",
                        "name":"버닝스톤",
                        "explanation":"불타는 돌을 만들어 적에게 쏟아 붓습니다."
                    }
                ],
                "jobs1":{
                    "name":"기사단장",
                    "skills":[
                        {
                            "command":"S",
                            "name":"파이어볼",
                            "explanation":"적에게 볼로된 구를 날립니다."
                        },
                        {
                            "command":"SS",
                            "name":"버닝스톤",
                            "explanation":"불타는 돌을 만들어 적에게 쏟아 붓습니다."
                        }
                    ]
                },
                "jobs2":{
                    "name":"버서커"
                }
            },
            {
                "name":"헌터",
                "image":"hunter.png",
                "explanation":"파괴력★★☆☆☆<br>내구력★☆☆☆☆<br>기동성★★★☆☆<br>원거리에서 지원 사격을 하며 근접클래스를 지원하는 클래스입니다<br>거리에 치중된만큼 내구력이 약하며 , 적들에게 둘러쌓이지 않게 주의해야합니다"
            },
            {
                "name":"힐러",
                "image":"healer.png",
                "explanation":"파괴력★☆☆☆☆<br>내구력★★☆☆☆<br>기동성★★★★☆<br>엔트리에서 빠져서는 안될 주요클래스입니다<br>팀원에게 버프를 걸어주며 회복을 하는 필수 클래스입니다"
            },
            {
                "name":"거너",
                "image":"gunner.png",
                "explanation":"파괴력★★☆☆☆<br>내구력★★☆☆☆<br>기동성★★★☆☆<br>중거리에서 지원사격을 하는 클래스입니다"
            },
            {
                "name":"시프",
                "image":"thief.png",
                "explanation":"파괴력★★★☆☆<br>내구력★☆☆☆☆<br>기동성★★★☆☆<br>근거리에서 클래스중 최고의 화력을 뽐내는 극화력형 클래스입니다<br>이동속도도 빠르고 공격속도도 빠르지만 내구력이 약하여 보조가 필요합니다"
            },
            {
                "name":"데빌",
                "image":"devil.png",
                "explanation":"파괴력★★★★★<br>내구력★☆☆☆☆<br>기동성★★★☆☆<br>클래스중 압도적으로 제일 강한 파괴력을 가진 클래스입니다.<br>다만 기술적으론 많이 부족한 클래스이기도 합니다."
            },
            {
                "name":"메카닉",
                "image":"mechanic.png",
                "explanation":"파괴력★☆☆☆☆<br>내구력★☆☆☆☆<br>기동성★★★☆☆<br>스스로 싸우기보다는 기계를 조작하여 싸우는 조금 특이한 클래스입니다<br>로봇을 만들어서 싸우기도 하고 , 버프를 걸기도 하며 폭격까지 할 수 있습니다"
            },
            {
                "name":"리콜러",
                "image":"recaller.png",
                "explanation":"파괴력★☆☆☆☆<br>내구력★☆☆☆☆<br>기동성★★★☆☆<br>스스로 싸우기보다는 정령을 소환하여 싸우는 조금 특이한 클래스입니다<br>정령을 조합할 수 도 있고 , 컨트롤하며 자유자재로 다룰수있습니다"
            },
            {
                "name":"빌더",
                "image":"builder.png",
                "explanation":"파괴력★☆☆☆☆<br>내구력★☆☆☆☆<br>기동성★★★☆☆<br>스스로 싸우기보다는 건물을 건설하여 싸우는 조금 특이한 클래스입니다<br>건물의 기능을 더 잘알고 효율적으로 사용 할 수 있으면 극한의 기능을 볼 수 있습니다"
            },
            {
                "name":"소서러",
                "image":"sorcerer.png",
                "explanation":"파괴력★☆☆☆☆<br>내구력★☆☆☆☆<br>기동성★★★☆☆<br>적에게 저주를 걸어서 능력치를 낮추거나 쓰러뜨리는 조금 특이한 클래스입니다<br>다만 주의할점은 , 아군에게도 저주가 걸릴 수 있어서 위험할 지도 모릅니다"
            },
            {
                "name":"은둔자",
                "image":"dmsenswk.png",
                "explanation":"파괴력★★★★☆<br>내구력★☆☆☆☆<br>기동성★★☆☆☆<br>차원의 문에서 나온 자. 그는 자신이 동양이란 세상에서 왔다고 한다. <br>이 클래스는 무공이란 마법을 사용하고 검술도 사용하는 다재다능한 클래스입니다<br>파괴력도 쎄지만 내구력과 기동성 그리고 기술은 한 사람에게만 집중된 기술이기 때문에 다수의 적에겐 약합니다."
            },
            {
                "name":"크루세이더",
                "image":"crusader.png",
                "explanation":"파괴력★★★☆☆<br>내구력★★★☆☆<br>기동성★★★☆☆<br>하늘의 가호를 받으며 싸우는 근접형 클래스입니다<br>힐러 없이도 회복을 할 수 있으며, 마법도 사용할 수 있지만 역시 극한의 능력을 보여주지는 않습니다"
            },
            {
                "name":"라이더",
                "image":"rider.png",
                "explanation":"파괴력★☆☆☆☆<br>내구력★☆☆☆☆<br>기동성★★★★★<br>어느 능력치하나 봐줄것이 없지만, 컨트롤만 잘한다면 굉장한 효력을 내는 클래스입니다<br>하지만 컨트롤을 못한다면 최악의 클래스이기때문에 , 초보자에게는 추천하지않습니다"
            },
            {
                "name":"알려진 바 없음",
                "nickname":"광기의 살육자",
                "image":"warrior.png",
                "spec1":5,
                "spec2":5,
                "spec3":5,
                "explanation":"파괴력측정불가.<br>내구력측정불가.<br>기동성측정불가.<br>무감각(Passive) - 쉴드 지속적으로 회복.<br>순수한 광기(Passive) - 아군 사망시 체력 마나 회복",
                "skills":[
                    {
                        "command":"S",
                        "name":"사혈참",
                        "explanation":"적을 혹독하게 찢어 죽입니다.",
                        "type":"공격형"
                    },
                    {
                        "command":"C",
                        "name":"광살각",
                        "explanation":"빛의속도로 적의 신체를 분해해버립니다.",
                        "type":"공격형"
                    },
                    {
                        "command":"CC",
                        "name":"흡혈참",
                        "explanation":"적의 피를 순간 흡혈해버립니다.(자신체력80%, 적체력 25%<보스불가>)",
                        "type":"유틸기"
                    },
                    {
                        "command":"A",
                        "name":"무한(無限)광격",
                        "explanation":"적을 수많은 검으로 강타하는데 그 숫자는 셀 수 없을 정도라고 한다.",
                        "type":"공격형"
                    },
                    {
                        "command":"O",
                        "name":"블러드 오브 엠페러",
                        "explanation":"이 기술은 어떤 기술인지 알 수 없다. 다만 피로 덮인 후에 적은 처참하게 토막 나 죽어있다.",
                        "type":"공격형"
                    },
                    {
                        "command":"P",
                        "name":"무감각",
                        "explanation":"쉴드 40 유지",
                        "type":"회복형"
                    },
                    {
                        "command":"P",
                        "name":"순수한 광기",
                        "explanation":"아군사망시 회복",
                        "type":"회복형"
                    }
                ]
            },
            {
                "name":"마제",
                "nickname":"의문의 사나이",
                "image":"dmsenswk.png",
                "spec1":5,
                "spec2":5,
                "spec3":5,
                "explanation":"파괴력측정불가.<br>내구력측정불가.<br>기동성측정불가.<br>상처(Passive)  -  사망할시 적을 지옥의 동반자로 삼습니다. <br>증오의 씨앗(Passive)  -  일정시간마다 체력을 회복합니다.<br>마제의 눈(Passive)  -  마제의 눈은 그 아무도 속일 수가 없습니다.(컴셋무한)",
                "skills":[
                    {
                        "command":"S",
                        "name":"어둠_[眞]",
                        "explanation":"적을 끌어옴과 동시에 검으로 적을 가릅니다.",
                        "type":"공격형"
                    },
                    {
                        "command":"C",
                        "name":"진환참",
                        "explanation":"모든 적의 공격을 무력화 시킵니다.(8초 지속)",
                        "type":"유틸기"
                    },
                    {
                        "command":"CC",
                        "name":"혈사원참",
                        "explanation":"마제가 벤다면 그에 뒤따라 그림자도 8번을 같이 벤다는 기술이다.",
                        "type":"공격형"
                    },
                    {
                        "command":"A",
                        "name":"쐐기_진극참",
                        "explanation":"수천개의 칼날들이 날아와 공격 한다. 이공격을 맞는 순간 적은 흔적도 없이 사라진다.",
                        "type":"공격형"
                    },
                    {
                        "command":"O",
                        "name":"사살백두(射殺百頭)",
                        "explanation":"\"쏘아 죽이는 100개의 머리\"라는 뜻으로 100번을 순식간으로 적을 베어버린다.",
                        "type":"공격형"
                    },
                    {
                        "command":"P",
                        "name":"상처",
                        "explanation":"사망시 Fire 생성",
                        "type":"유틸기"
                    },
                    {
                        "command":"P",
                        "name":"증오의 씨앗",
                        "explanation":"주기적으로 체력 회복",
                        "type":"회복형"
                    },
                    {
                        "command":"P",
                        "name":"마제의 눈",
                        "explanation":"스캔 무한",
                        "type":"유틸기"
                    }
                ]
            }
        ]
    }
];