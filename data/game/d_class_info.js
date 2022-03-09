classDataJson=[
    {
        "classes":[
            {
                "name":"워리어",
                "image":"warrior.png",
                "spec1":2,
                "spec2":3,
                "spec3":1,
                "explanation":[
                    "근접형전투로 보조마법을 받으면서 선두에서 싸우는 클래스입니다",
                    "강한 체력과 적당한 공격력을 가지고있어서 여유롭게 사냥할 수 있습니다"
                ],
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
                "jobs":[
                    {
                        "name":"기사단장",
                        "nickname":"병사들이 따르는 자",
                        "battleType":"소환형",
                        "role":"탱커",
                        "difficulty":"쉬움",
                        "explanation":[
                            "유닛을 소환하여 전투에 참전하는 직업입니다.",
                            "소환물 위주로 플레이하며 아군보호를 수행합니다.",
                            "초보자에게 추천하는 직업입니다.",
                            "※ 4라운드 이후 돈을 더 받을수 있습니다!"
                        ],
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
                            },
                            {
                                "command":"C",
                                "name":"지원군",
                                "explanation":"지원군을 호출한다",
                                "type":"소환형"
                            },
                            {
                                "command":"고블린12+C",
                                "name":"암흑지원군",
                                "explanation":"암흑지원군을 호출한다",
                                "type":"소환형"
                            },
                            {
                                "command":"A",
                                "name":"전투무장",
                                "explanation":"전투무장을 하여 웬만한 공격은 끄떡없다",
                                "type":"유틸기"
                            },
                            {
                                "command":"A+A",
                                "name":"크라이",
                                "explanation":"광범위한 적들을 5초동안 도발한다",
                                "type":"유틸기"
                            },
                            {
                                "command":"O",
                                "name":"마법기사단 지원",
                                "explanation":"자신의 체력과 마나를 깎고 높은 수준의 마법기사단을 소환합니다",
                                "type":"소환형"
                            }
                        ]
                    },
                    {
                        "name":"버서커",
                        "nickname":"검에 굶주린 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "본체가 직접 전투에 참전하는 직업입니다.",
                            "끊임없는 유지력으로 필드와 보스를 구분하지않고 싸울 수 있습니다.",
                            "원한다면 목숨을 바쳐서라도 아주 큰 타격을 입힐 수 있습니다."
                        ],
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
                            },
                            {
                                "command":"버서크+C",
                                "name":"광(廣)혈무",
                                "explanation":"눈앞에 보이는 물체를 사정없이 벤다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"정신통일",
                                "explanation":"정신통일을 하여 버서크상태에서도 컨트롤이 가능하다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"정신통일+A",
                                "name":"광참수 (廣斬數)",
                                "explanation":"적을 단칼에 베어버린후, 분노를 가라앉힌다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"리젠트먼트",
                                "explanation":"버서커가 분노하여 방어를 포기한 극공상태로 태세를 전환한다.<br>마나가 100이하일때 1초에 4씩 마나가 회복됩니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"정신통일+O+AAA",
                                "name":"동귀어진",
                                "explanation":"버서커 최후의 공격. 상대뿐만아니라 자기또한 파멸하는 극공기술이다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
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
                        "explanation":"적에게 볼로된 구를 날립니다.",
                        "type":"공격형"
                    },
                    {
                        "command":"SS",
                        "name":"버닝스톤",
                        "explanation":"불타는 돌을 만들어 적에게 쏟아 붓습니다.",
                        "type":"공격형"
                    }
                ],
                "jobs":[
                    {
                        "name":"아크메이지",
                        "nickname":"원소를 마음대로 조종하는 자",
                        "battleType":"유지형",
                        "role":"딜러",
                        "difficulty":"어려움",
                        "explanation":[
                            "아군 뒤에서 유지기를 사용하여 전투하는 유지&공격형 직업입니다.",
                            "유지기 캐릭터의 입문으로 적합한 직업입니다.",
                            "능숙한 부대 컨트롤 능력이 요구됩니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"파이어볼",
                                "explanation":"적에게 볼로된 구를 날립니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"SS",
                                "name":"버닝스톤",
                                "explanation":"불타는 돌을 만들어 적에게 쏟아 붓습니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"블리자드",
                                "explanation":"적의 위 하늘에서 벼락을 내린다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"마력 충전",
                                "explanation":"마법의 힘을 모아서 마나를 100%회복한다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A+A",
                                "name":"카오스",
                                "explanation":"위자드 주변에 어둠을 뿜어내어 적을 말살 시킵니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"메테오",
                                "explanation":"우주에서 운석을 내려서 주변을 초토화시킨다.",
                                "type":"공격형"
                            }
                        ]
                    },
                    {
                        "name":"배틀메이지",
                        "nickname":"마법과 힘을 융합시키는 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "적과 근접하여 전투하는 직업입니다.",
                            "어느정도 유지기를 사용할 줄 알아야 합니다.",
                            "자신이 뛰어들 때와 아닐 때를 구분할 줄 아는 것이 중요합니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"파이어볼",
                                "explanation":"적에게 볼로된 구를 날립니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"SS",
                                "name":"버닝스톤",
                                "explanation":"불타는 돌을 만들어 적에게 쏟아 붓습니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"매직 스윙",
                                "explanation":"기습적으로 적에게 돌진한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"매직 가드",
                                "explanation":"마법의 방어막을 형성하여 방어력을 높인다.",
                                "type":"회복형"
                            },
                            {
                                "command":"A+A",
                                "name":"마력 과부하",
                                "explanation":"즉시 100마나를 얻고 20초동안 매직 가드가 무효화되지만 마나를 빠르게 회복합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"O",
                                "name":"마력폭발",
                                "explanation":"마력을 폭발하여 순간적으로 주변을 초토화시킨다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"헌터",
                "image":"hunter.png",
                "spec1":2,
                "spec2":1,
                "spec3":3,
                "explanation":"원거리에서 지원 사격을 하며 근접클래스를 지원하는 클래스입니다<br>거리에 치중된만큼 내구력이 약하며 , 적들에게 둘러쌓이지 않게 주의해야합니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"헤드샷",
                        "explanation":"적의 머리를 조준하여 강한 한방을 날린다.",
                        "type":"공격형"
                    }
                ],
                "jobs":[
                    {
                        "name":"트랩퍼",
                        "nickname":"전설적인 사냥꾼인 자",
                        "battleType":"원거리형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "끌어당김과 트랩을 사용하여 전투를 치릅니다.",
                            "많은 적을 한번에 처리하는데에 특화되어있습니다.",
                            "팀킬의 위험이 있지만 잘 사용한다면 효율이 매우 좋습니다.",
                            "때로는 자신의 죽음까지 트랩으로 사용합니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"트랩 발동 !",
                                "explanation":"설치해뒀던 트랩을 폭발시킨다(6회제한)",
                                "type":"공격형"
                            },
                            {
                                "command":"트랩최대치+S",
                                "name":"트랩 회수!",
                                "explanation":"터지지않은 트랩을 회수합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"벡터트랩",
                                "explanation":"멀리 떨어진 위치에 적을 빨아들이는 함정을 설치합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"벡터트랩+S",
                                "name":"추가화력 - 지뢰",
                                "explanation":"벡터트랩에 데미지를 가할 수 있는 지뢰를 추가합니다.(벡터트랩 지속시간+0.168초)",
                                "type":"공격형"
                            },
                            {
                                "command":"벡터트랩+C",
                                "name":"추가화력 - 폭발물",
                                "explanation":"벡터트랩에 데미지를 가할 수 있는 폭발물을 추가합니다.(벡터트랩 지속시간+0.168초)",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"생존본능",
                                "explanation":"자신의 몸을 보호할 수 있는 벙커를 투하합니다. 20초마다 자동수리됩니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"O",
                                "name":"의도된 죽음(Binding Life)",
                                "explanation":"5초이내에 사망하면 마나를 돌려받고 계속 마나를 얻으며 트랩을 사용할 수 있습니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"P",
                                "name":"고유능력",
                                "explanation":"처음으로 적 탐지반경에 들어온 적에게 표식을 띄웁니다.",
                                "type":"유틸기"
                            }
                        ]
                    },
                    {
                        "name":"스나이퍼",
                        "nickname":"천리안을 가진 자",
                        "battleType":"원거리형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "완벽한 백발백중의 저격을 하여 적에게 치명적인 타격을 줍니다.",
                            "원거리형 전투를 하며 핵무기까지 사용할 수 있습니다.",
                            "단 한번만 사용가능한 스킬은 모든것을 파괴해버립니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"헤드샷",
                                "explanation":"적의 머리를 조준하여 강한 한방을 날린다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"스나이핑",
                                "explanation":"적을 조준하여 일격을 가한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"CC",
                                "name":"이중사격",
                                "explanation":"사격을 하는 도중 미세한 움직임으로 이중사격을 가한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"생존본능",
                                "explanation":"자신의 몸을 보호할 수 있는 벙커를 투하합니다. 20초마다 자동수리됩니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"방어요새+A",
                                "name":"트라이던트",
                                "explanation":"붉은색 빛 줄기로 이뤄진 얇은 실선 모양의 레이저 빔이 3가닥씩 연속적으로 타깃의 몸통을 뚫고 나오게 된다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"테러리스트",
                                "explanation":"지정된 위치에 핵미사일을 떨어뜨려 초토화시킨다.",
                                "type":"공격형"
                            },
                            {
                                "command":"CCOSOA",
                                "name":"Ground  Zero",
                                "explanation":"지정된 위치주변에 있는 모든것을 파괴시킨다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"힐러",
                "image":"healer.png",
                "spec1":1,
                "spec2":2,
                "spec3":4,
                "explanation":"엔트리에서 빠져서는 안될 주요클래스입니다<br>팀원에게 버프를 걸어주며 회복을 하는 필수 클래스입니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"의료장비 공급",
                        "explanation":"사용했던 의료장비를 보충한다.",
                        "type":"유틸기"
                    }
                ],
                "jobs":[
                    {
                        "name":"프리스트",
                        "nickname":"공력을 극대화시키는 자",
                        "battleType":"근거리형",
                        "role":"힐러&서포터",
                        "difficulty":"쉬움",
                        "explanation":[
                            "아군을 치료하고, 버프를 부여하여 지원하는 직업입니다.",
                            "유일무이하게 적 보스의 디버프 효과를 제거할 수 있습니다.",
                            "궁극기인 아군 전체 무적은 매우 단순하면서도 강력한 효과입니다.",
                            "1회용 스킬을 사용해 최종병기로 나설 수도 있습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"매지컬 실드",
                                "explanation":"아군에게 방어력을 높여주는 버프를 걸어준다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"정화",
                                "explanation":"아군에게 적용된 각종 디버프를 제거합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"SCSS",
                                "name":"성기사단 소환",
                                "explanation":"프리스트를 지키는 성스러운 수호자를 소환합니다.(최대 셋 보유가능)",
                                "type":"소환형"
                            },
                            {
                                "command":"A",
                                "name":"힐",
                                "explanation":"주변에 있는 아군의 HP를 전부 회복한다.(주캐릭터만 회복)",
                                "type":"회복형"
                            },
                            {
                                "command":"O",
                                "name":"신성한 결계",
                                "explanation":"아군 전체가 무적이 된다. 30초동안 지속된다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"SOSAAA",
                                "name":"Priest Angel Mode",
                                "explanation":"프리스트가 아름다움과 마음을 상징하는 천사로 탈바꿈합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"엔젤모드+S",
                                "name":"샤이닝 에로우",
                                "explanation":"빛의 화살을 발사합니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"엔젤모드+C",
                                "name":"힐",
                                "explanation":"주변에 있는 아군의 HP를 전부 회복한다.(근처 모든 유닛 100%회복)",
                                "type":"회복형"
                            },
                            {
                                "command":"엔젤모드+A",
                                "name":"홀리 윙즈워드",
                                "explanation":"천사의 깃털로 적을 제압합니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"엔젤모드+O",
                                "name":"크로스 캐논",
                                "explanation":"십자가의 모양의 캐논을 힘껏 발사합니다.",
                                "type":"공격형"
                            }
                        ]
                    },
                    {
                        "name":"클레릭",
                        "nickname":"세상의 모든 의학을 깨달은 자",
                        "battleType":"근거리형",
                        "role":"힐러&딜러",
                        "difficulty":"어려움",
                        "explanation":[
                            "아군을 치료하면서 보조 딜러를 수행할 수 있습니다.",
                            "다른 직업들보다 더 좋은 가스 재생력을 가지고 있습니다.",
                            "자신을 희생하여 모든 아군을 부활시킬 수 있습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"의료장비 공급",
                                "explanation":"사용했던 의료장비를 보충한다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"Mind_Eye",
                                "explanation":"보이지 않는 적을 탐지, 시야확보를 하며 마나 회복률을 높여줍니다.(마나 초당 +2)",
                                "type":"유틸기"
                            },
                            {
                                "command":"MindEye+C",
                                "name":"마나희생",
                                "explanation":"자신의 체력을 희생하여 마나를 채웁니다.(쿨타임 존재)",
                                "type":"유틸기"
                            },
                            {
                                "command":"MindEye+CCCC",
                                "name":"새크리파이스",
                                "explanation":"자신을 희생하여 죽었던 아군을 모두 살리고 주변 적들에게 죽음을 선사합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"힐",
                                "explanation":"주변에 있는 아군의 HP를 전부 회복한다.(모든 유닛회복)",
                                "type":"회복형"
                            },
                            {
                                "command":"O",
                                "name":"홀리 제네시스",
                                "explanation":"힐의 기운을 성스러운 기운으로 변환시켜 주변에 낙뢰를 친다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O+O+O+O",
                                "name":"영원한 선봉장",
                                "explanation":"죽음에 이르는 피해를 받고 사망하면 10초후 그 자리에서 부활합니다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"거너",
                "image":"gunner.png",
                "spec1":2,
                "spec2":2,
                "spec3":3,
                "explanation":"중거리에서 지원사격을 하는 클래스입니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"지원사격 MG-43",
                        "explanation":"지원사격을 해주는 인공지능 소총을 작동한다.",
                        "type":"소환형"
                    },
                    {
                        "command":"S+S",
                        "name":"다발사격",
                        "explanation":"적에게 향하여 연속으로 사격한다.",
                        "type":"공격형"
                    }
                ],
                "jobs":[
                    {
                        "name":"런처",
                        "nickname":"세상의 모든 무기를 사용하는 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "필드 보스 가림없이 참전 가능한 직업입니다.",
                            "DPS는 낮지만 총 화력은 높아 지속딜은 좋은 편이며,",
                            "후반 보스전에서 거슬리는 대공 처리에 매우 유리합니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"지원사격 MG-43",
                                "explanation":"지원사격을 해주는 인공지능 소총을 작동한다.",
                                "type":"소환형"
                            },
                            {
                                "command":"S+S",
                                "name":"다발사격",
                                "explanation":"적에게 향하여 연속으로 사격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"퀵파이어",
                                "explanation":"화염을 담은 총알을 기계식으로 하여금 발사한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"메탈스톰 슈퍼건",
                                "explanation":"엄청난 발사속도를 자랑하는 슈퍼건으로 대량의 총알을 발사한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"로즈러너",
                                "explanation":"자신의 동료들을 부른다. (100초동안 지속)",
                                "type":"소환형"
                            }
                        ]
                    },
                    {
                        "name":"레인저",
                        "nickname":"목숨을 위해 목숨을 바치는 자",
                        "battleType":"유지형",
                        "role":"딜러",
                        "difficulty":"매우 어려움",
                        "explanation":[
                            "유지기를 사용하여 전투에 참전하는 직업입니다.",
                            "지속적인 화력은 좋으나 본체 관리가 힘든 편입니다.",
                            "초보자에게는 추천하지 않습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"지원사격 MG-43",
                                "explanation":"지원사격을 해주는 인공지능 소총을 작동한다.",
                                "type":"소환형"
                            },
                            {
                                "command":"지원사격+S",
                                "name":"다발사격",
                                "explanation":"적에게 향하여 연속으로 사격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"정찰",
                                "explanation":"정찰동물을 호출하여 정찰을 시킨다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"CC",
                                "name":"테크니컬 라운더",
                                "explanation":"정찰견 웅견과 함께 적들에게 돌진한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"플래티넘 헤드샷",
                                "explanation":"여러개의 잔상과 더불어 힘을 가해, 태풍처럼 빠르게 난사한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"AA",
                                "name":"수류탄투척",
                                "explanation":"3가지 속성의 수류탄을 투척합니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"난사",
                                "explanation":"수천발의 총알을 난사하여 주변의 적들에게 치명상을 입힌다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"시프",
                "image":"thief.png",
                "spec1":3,
                "spec2":1,
                "spec3":3,
                "explanation":"근거리에서 클래스중 최고의 화력을 뽐내는 극화력형 클래스입니다<br>이동속도도 빠르고 공격속도도 빠르지만 내구력이 약하여 보조가 필요합니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"강탈",
                        "explanation":"몬스터에게 폭력을 가하고 처치했다면 돈을 뺐는다.",
                        "type":"공격형"
                    }
                ],
                "jobs":[
                    {
                        "name":"닌자",
                        "nickname":"적의 마음까지 훔치는 자",
                        "battleType":"소환형",
                        "role":"탱커&딜러",
                        "difficulty":"쉬움",
                        "explanation":[
                            "필드 보스 가림없이 참전 가능한 직업입니다.",
                            "평소에는 튼튼한 소환물로 본체와 아군을 보호하면서도,",
                            "순식간에 돌변하여 고화력 공격을 퍼부을 수 있습니다.",
                            "초보자에게 추천하는 직업입니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"강탈",
                                "explanation":"몬스터에게 폭력을 가하고 처치했다면 돈을 뺐는다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"그림자 분신",
                                "explanation":"자신과 똑같은 그림자를 만든다. (최대 12기)",
                                "type":"소환형"
                            },
                            {
                                "command":"A",
                                "name":"그림자 수리검",
                                "explanation":"그림자들이 독이 묻어있는 날카로운 수리검을 던진다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"그림자 영혼 주입",
                                "explanation":"자신의 영혼을 그림자들에게 주입하여 더 강력하게 만듭니다.(자신체력1%)",
                                "type":"소환형"
                            },
                            {
                                "command":"O + S",
                                "name":"그림자 영혼 분열",
                                "explanation":"영혼 주입된 그림자가 그림자 8개로 분열합니다.",
                                "type":"소환형"
                            }
                        ]
                    },
                    {
                        "name":"어쌔신",
                        "nickname":"깊은 어둠속에서 사는 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"매우 어려움",
                        "explanation":[
                            "본체가 직접 전투에 참여하는 직업입니다.",
                            "스킬 구조가 복잡하며, 스플 관리와 본체 관리 등",
                            "관리가 어려운 요소와 연습해야 할 요소가 많습니다.",
                            "초보자에게는 추천하지 않습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"강탈",
                                "explanation":"몬스터에게 폭력을 가한후 돈을 뺐는다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"은신",
                                "explanation":"잠시간 적에게 보이지 않아 암살률을 높입니다.(2초지속)",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"포이즌 대거",
                                "explanation":"대거에 독을 묻혀 적에게 치명상을 입힙니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"대거2기+A",
                                "name":"압도",
                                "explanation":"주위 적들을 공포에 휩싸이게 만듭니다.(주위 적 체력 30%)",
                                "type":"유틸기"
                            },
                            {
                                "command":"O",
                                "name":"블러드 리차지",
                                "explanation":"상대를 죽이면 그 피를 모두 흡수해 체력을 회복하고 10초마다 가스를 60 회복합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"대거2기+O",
                                "name":"한계도약",
                                "explanation":"정신력으로 포이즌대거 수용한계를 넘어서고 이제 사냥을 준비합니다.(가스 + 300)",
                                "type":"소환형"
                            },
                            {
                                "command":"대거4기+O",
                                "name":"익스플로젼 대거",
                                "explanation":"포이즌대거를 제물로 소형폭탄을 장착한다.(가스600 반환)",
                                "type":"소환형"
                            },
                            {
                                "command":"익스플로젼 대거+S",
                                "name":"Bomb",
                                "explanation":"익스플로젼 대거를 한개 터뜨린다.",
                                "type":"공격형"
                            },
                            {
                                "command":"P",
                                "name":"불확실한 암살 임무",
                                "explanation":"각 보스를 처치할 때마다 보상을 얻습니다.<br>팀원이 보스를 처치해도 자신이 살아있다면 보상을 받습니다.",
                                "type":"유틸기"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"데빌",
                "image":"devil.png",
                "spec1":5,
                "spec2":1,
                "spec3":3,
                "explanation":"클래스중 압도적으로 제일 강한 파괴력을 가진 클래스입니다.<br>다만 기술적으론 많이 부족한 클래스이기도 합니다.",
                "skills":[
                    {
                        "command":"S",
                        "name":"재생력",
                        "explanation":"고대의 악마는 상처를 입어도 재생력이 빨라 원상태로 복귀됩니다.",
                        "type":"회복형"
                    }
                ],
                "jobs":[
                    {
                        "name":"디아블로",
                        "nickname":"세상을 멸종케 하려는 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"쉬움",
                        "explanation":[
                            "필드 보스 가림없이 참전 가능한 직업입니다.",
                            "스킬 구조가 단순하면서 본체 관리도 쉬운 편이며",
                            "화력또한 만만치 않게 강력합니다.",
                            "초보자에게 추천하는 직업입니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"재생력",
                                "explanation":"고대의 악마는 상처를 입어도 재생력이 빨라 원상태로 복귀됩니다.",
                                "type":"회복형"
                            },
                            {
                                "command":"C",
                                "name":"데빌브레스",
                                "explanation":"디아블로의 입에서 불을 뿜어냅니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"CC",
                                "name":"데스티네이션",
                                "explanation":"브레스로 인한 화염이 꺼지지 않고 적에게 까지 퍼집니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"Smog of Darkness",
                                "explanation":"지옥의 검은연기로 적을 말살시켜버립니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"모드변경 - 불사의 몸",
                                "explanation":"디아블로는 불사모드로 잠시간 변신합니다.<마지막은 근처적 소멸>",
                                "type":"유틸기"
                            }
                        ]
                    },
                    {
                        "name":"발로그",
                        "nickname":"파괴의 씨앗",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"쉬움",
                        "explanation":[
                            "보스전에 특화된 고화력 고DPS 직업입니다.",
                            "딜 스킬을 근접해서 사용해야한다는 단점이 있지만",
                            "화력은 직업중 최강이라 할만큼 강력합니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"재생력",
                                "explanation":"고대의 악마는 상처를 입어도 재생력이 빨라 원상태로 복귀됩니다.",
                                "type":"회복형"
                            },
                            {
                                "command":"C",
                                "name":"기습공격",
                                "explanation":"적에게 순식간에 다가와 공격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"CS",
                                "name":"플레인 배쉬",
                                "explanation":"발로그가 지진이 날 정도의 배쉬를 사용하여 적에게 피해를 줍니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"광격",
                                "explanation":"적에게 받은 데미지를 잊어버릴 정도로 광기 여린 정신으로 공격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"파멸의 조각",
                                "explanation":"파멸이 깨져 조각에서 나오는 어둠이 적을 집어삼킵니다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"메카닉",
                "image":"mechanic.png",
                "spec1":1,
                "spec2":1,
                "spec3":3,
                "explanation":"스스로 싸우기보다는 기계를 조작하여 싸우는 조금 특이한 클래스입니다<br>로봇을 만들어서 싸우기도 하고 , 버프를 걸기도 하며 폭격까지 할 수 있습니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"연구비 지원",
                        "explanation":"정부에서 기계공에게 지원금을 줍니다 Money+3",
                        "type":"유틸기"
                    }
                ],
                "buildings":[
                    {
                        "command":"TBS",
                        "name":"전동차 제작",
                        "usage":"전동차를 하나 소환합니다.",
                        "type":"소환형"
                    }
                ],
                "jobs":[
                    {
                        "name":"메카니즘 마스터",
                        "nickname":"세상의 모든 기계를 조종하는 자",
                        "battleType":"소환형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "메카닉 유닛을 소환하여 전투에 참전하는 직업입니다.",
                            "수송선을 활용하여 메카닉의 기동성을 높입니다.",
                            "메카닉 유닛 수를 최대로 잘 유지해야합니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"연구비 지원",
                                "explanation":"정부에서 기계공에게 지원금을 줍니다 Money+3",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"보디가드",
                                "explanation":"정부에서 보디가드가 나와서 지켜준다. (최대 1명)",
                                "type":"소환형"
                            },
                            {
                                "command":"A",
                                "name":"메카니즘 연구",
                                "explanation":"메카닉 유닛들을 제작할 수 있게 연구한다",
                                "type":"유틸기"
                            },
                            {
                                "command":"A+A",
                                "name":"고급유닛 대여",
                                "explanation":"더 강력한 메카닉 유닛을 주문합니다. <br>제작이 완료되었을 때 신호탄(터렛)을 설치하면 받을 수 있습니다.(최대 5세트)",
                                "type":"유틸기"
                            },
                            {
                                "command":"O",
                                "name":"수송선소환",
                                "explanation":"메카닉들의 기동성을 극대화 시키는 수송선을 소환한다.<br>하지만 기동성에 너무 중점을 둔 나머지 짧은 유지시간을 가지고있다.",
                                "type":"소환형"
                            },
                            {
                                "command":"수송선+C",
                                "name":"동력공급",
                                "explanation":"수송선의 동력을 공급해 메카닉을 치료한다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"수송선+O",
                                "name":"수납공간 확장",
                                "explanation":"한번에 데리고 다닐수있는 기계유닛들의 숫자를 증가시킨다.<br>수송선에 동력을 최대로 공급한다.",
                                "type":"유틸기"
                            }
                        ],
                        "buildings":[
                            {
                                "command":"메카니즘 연구+TBS",
                                "name":"하급 제작",
                                "usage":"무인경비로봇을 하나 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"메카니즘 연구+TBC",
                                "name":"중급 제작",
                                "usage":"무인경비로봇을 둘 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"TBU",
                                "name":"방어 요새",
                                "usage":"총잡이들과 함께 벙커로 들어갑니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"TBT",
                                "name":"신호탄",
                                "explanation":"주문제작이 완료된 메카닉 병력들을 배달받습니다.",
                                "type":"소환형"
                            }
                        ]
                    },
                    {
                        "name":"폭발물 제조사",
                        "nickname":"기계에 정열까지 폭발한 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "보스전에 특화된 고화력 고DPS 직업입니다.",
                            "딜 스킬은 매우 강력하고 단타성으로 쉬운 편이지만,",
                            "장전해야만 사용할 수 있다는 단점이 있습니다.",
                            "팀원들에게 피해를 입히지 않도록 주의해야합니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"연구비 지원",
                                "explanation":"정부에서 기계공에게 지원금을 줍니다 Money+3",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"폭탄 제조 허가서",
                                "explanation":"공식적으로 폭탄 제조 허가서를 받는다",
                                "type":"유틸기"
                            },
                            {
                                "command":"파이어골램+C",
                                "name":"폭탄분열",
                                "explanation":"생성된 파이어골램을 분열시켜 더 강력한 폭탄을 만듭니다.(가스-60)",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"폭탄 드랍",
                                "explanation":"적에게 폭탄을 떨어뜨려 큰 데미지를 준다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"폭탄핵분열",
                                "explanation":"이제까지 모아둔 폭탄들을 모두 핵분열시켜버립니다.",
                                "type":"공격형"
                            }
                        ],
                        "buildings":[
                            {
                                "command":"폭탄 제조 허가서 + TBS",
                                "name":"파이어 골램 소환",
                                "explanation":"파이어 골램을 하나 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"파이어 골램 + TBS",
                                "name":"폭탄 장전",
                                "explanation":"폭탄을 저장합니다.(최대 5개)",
                                "type":"유틸기"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"리콜러",
                "image":"recaller.png",
                "spec1":1,
                "spec2":1,
                "spec3":3,
                "explanation":"스스로 싸우기보다는 정령을 소환하여 싸우는 조금 특이한 클래스입니다<br>정령을 조합할 수 도 있고 , 컨트롤하며 자유자재로 다룰수있습니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"맹독충",
                        "explanation":"맹독충을 소환합니다.",
                        "type":"소환형"
                    }
                ],
                "jobs":[
                    {
                        "name":"소울 브레이커",
                        "nickname":"정신을 붕괴시키는 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "본체가 직접 전투에 참전하는 직업입니다.",
                            "스킬들의 딜은 높은편이나, ",
                            "최대 체력이 낮기 때문에 체력관리에 주의가 필요합니다.",
                            "주변 적을 다른차원으로 보내는 스킬이 있습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"맹독충",
                                "explanation":"맹독충을 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"C",
                                "name":"늑대의 석상",
                                "explanation":"주변에 있는 맹독충 1마리를 희생하여 늑대의 석상을 단시간 소환한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"지옥_ⅱ침식 그림자",
                                "explanation":"지옥에서 알수 없는 그림자 형태의 물체를 지옥에서 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"검은 그림자+A",
                                "name":"그림자 영혼강탈",
                                "explanation":"그림자의 공격으로 적의 영혼을 혼란상태에 빠집니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"공간의 뒤틀림 : 헬드롭",
                                "explanation":"뒤틀린 공간속에서 적들에게 지옥을 선사한다. 여기서 빠져나올수 잇는건 최상위계층들뿐..",
                                "type":"공격형"
                            }
                        ]
                    },
                    {
                        "name":"대 지도자",
                        "nickname":"모든 영혼이 따르는 자",
                        "battleType":"소환형",
                        "role":"딜러&탱커",
                        "difficulty":"쉬움",
                        "explanation":[
                            "유닛을 소환하여 전투에 참전하는 직업입니다.",
                            "소환물 위주의 직업이지만, 나름대로의 딜 스킬을",
                            "가지고 있습니다. 스플에 주의할 필요가 있습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"하급정령 소환",
                                "explanation":"하급정령을 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"C",
                                "name":"지도자-제탈피스",
                                "explanation":"제탈피스를 가진 자만이 비로소 진정한 지도자다.",
                                "type":"소환형"
                            },
                            {
                                "command":"제탈피스+C",
                                "name":"엠플리케이션",
                                "explanation":"제탈피스가 폭발하며 공격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"제탈피스+하급정령5기+S",
                                "name":"정령의 희생",
                                "explanation":"하급정령 5기를 희생시켜 제탈피스 주위의 모든 소환몹들을 회복시키고 20초동안 적이 은폐된 유닛을 볼 수 없습니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"중급정령-매직골렘",
                                "explanation":"중급 소환정령인 매직골렘을 소환한다.",
                                "type":"소환형"
                            },
                            {
                                "command":"O",
                                "name":"대계약-정령왕 아타락시아",
                                "explanation":"최상급 소환정령인 정령와 아타락시아를 소환합니다.<br>60초마다 정령왕이 충전되어 정령왕이 사망하면 자동으로 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"정령왕+O",
                                "name":"정령왕의 출격",
                                "explanation":"정령왕 아타락시아가 체력을 회복하고 소환수들을 이끈다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"빌더",
                "image":"builder.png",
                "spec1":1,
                "spec2":1,
                "spec3":3,
                "explanation":"스스로 싸우기보다는 건물을 건설하여 싸우는 조금 특이한 클래스입니다<br>건물의 기능을 더 잘알고 효율적으로 사용 할 수 있으면 극한의 기능을 볼 수 있습니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"건축비 지원",
                        "explanation":"정부에서 건축가에게 지원금을 줍니다 Money+5",
                        "type":"유틸기"
                    }
                ],
                "buildings":[
                    {
                        "command":"PBP",
                        "name":"Shiny Tower",
                        "usage":"다른 건물을 짓기위해 필수적으로 필요한 건물입니다."
                    },
                    {
                        "command":"PBC",
                        "name":"Attacker Tower",
                        "usage":"하나만 지을 수 있는 공격건물입니다."
                    },
                    {
                        "command":"PBB",
                        "name":"방어보충소",
                        "usage":"버프빌더의 쉴드를 채워줄 수 있는 건물입니다."
                    }
                ],
                "jobs":[
                    {
                        "name":"버프빌더",
                        "nickname":"건물을 반전시키는 자",
                        "battleType":"소환형",
                        "role":"서포터&딜러&탱커",
                        "difficulty":"매우 어려움",
                        "explanation":[
                            "다양한 지원 스킬로 아군을 지원하는 직업입니다.",
                            "스킬이 매우 많고 구조도 복잡하며, 상황에 따라",
                            "어떤 스킬을 사용해야 하는지 빨리 판단해야 합니다.",
                            "아군보호와 용병관리 등 신경써야 할 요소가 많습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"건축비 지원",
                                "explanation":"정부에서 건축가에게 지원금을 줍니다 Money+5",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"강제소환",
                                "explanation":"파티원들을 안전하게 자신앞으로 소환합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"요정의 축복",
                                "explanation":"건설에 지친 몸과 마음을 요정이 회복하여 줍니다.(자신유닛만 회복가능)",
                                "type":"회복형"
                            },
                            {
                                "command":"Fairy+A",
                                "name":"요정의 희생",
                                "explanation":"요정들이 나타나 자신을 희생하여 빌더를 지켜줍니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"O",
                                "name":"사기 상승",
                                "explanation":"25초 동안 아군 소환몹들의 사기를 올린다. (전체체력, 쉴드 100%, 누적 최대 75초 가능)",
                                "type":"회복형"
                            },
                            {
                                "command":"Z",
                                "name":"용병 고용",
                                "explanation":"비싼 광물로 최고의 용병들을 고용합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"D",
                                "name":"용병 출격",
                                "explanation":"고용한 용병들을 전장으로 소환합니다. 이미 소환했던 용병들은 회수합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"T",
                                "name":"강화보호막",
                                "explanation":"20초동안 고용한 용병들의 보호막이 100%로 유지됩니다.(쿨타임 60초)",
                                "type":"회복형"
                            },
                            {
                                "command":"K",
                                "name":"용죽경없",
                                "explanation":"지금까지 피해를 받아 사망한 용병들을 부활시킵니다.<br>20초동안 피해를 받아 사망하는 용병들이 부활합니다.(쿨타임 70초)",
                                "type":"유틸기"
                            },
                            {
                                "command":"o",
                                "name":"반액대매출",
                                "explanation":"Knight연구소를 제외한 모든 건물을 반값에 매각합니다.",
                                "type":"유틸기"
                            }
                        ],
                        "buildings":[
                            {
                                "command":"PBP",
                                "name":"Shiny Tower",
                                "usage":"다른 건물을 짓기위해 필수적으로 필요한 건물입니다."
                            },
                            {
                                "command":"PBC",
                                "name":"Attacker Tower",
                                "usage":"하나만 지을 수 있는 공격건물입니다."
                            },
                            {
                                "command":"PBB",
                                "name":"방어보충소",
                                "usage":"버프빌더의 쉴드를 채워줄 수 있는 건물입니다."
                            },
                            {
                                "command":"PBN",
                                "name":"Heal Tower",
                                "usage":"주변에 Fairy가 있다면 회복주기마다 주변 아군의 주캐릭터까지 회복시킵니다.",
                                "type":"회복형"
                            },
                            {
                                "command":"PVC",
                                "name":"버프1 : 구속 - 생체,기계",
                                "explanation":"생체,기계를 구속할 수 있는 유닛을 소환한다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"PVF",
                                "name":"버프2 : 보호 - 원거리",
                                "explanation":"원거리 공격유닛으로부터 보호할 수 있는 유닛을 소환한다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"PVA",
                                "name":"버프3 : 결계 - 무적",
                                "explanation":"아군에게 이로운 효과를 주는 유닛을 소환한다.(한스테이지에 한번만 사용가능)",
                                "type":"유틸기"
                            },
                            {
                                "command":"PVO+s",
                                "name":"금단의 제조 - 체력추출",
                                "explanation":"거의 모든 체력을 소모하여 체력포션을 제조합니다.(쿨타임 10초)",
                                "usage":"주변에 빌더가 존재해야하며 다른 아군들도 사용가능한 스킬입니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"PVO+v",
                                "name":"금단의 제조 - 마나추출",
                                "explanation":"마나500을 소모하여 마나포션을 제조합니다.",
                                "usage":"주변에 빌더가 존재해야하며 다른 아군들도 사용가능한 스킬입니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"PVT",
                                "name":"Knight 연구소",
                                "usage":"T, K스킬을 사용할 수 있게 만드는 건물입니다."
                            }
                        ]
                    },
                    {
                        "name":"모스트빌더",
                        "nickname":"하나의 건물에만 집착하는 자",
                        "battleType":"근거리형",
                        "role":"탱커&지원가",
                        "difficulty":"보통",
                        "explanation":[
                            "건물을 지어 아군을 보호하는 직업입니다.",
                            "방어력은 모든 직업중에 원탑수준으로,",
                            "건물만 확보된다면 가장 튼튼한 탱커로 활약합니다.",
                            "최후의 보루로 궁극캐논을 소환할 수 있습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"도발",
                                "explanation":"적들을 도발하여 순간적으로 자신을 눈에띄게 한다.(1초)",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"건설 연구",
                                "explanation":"어태커타워를 15개까지 건설할 수 있게 된다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"C+C",
                                "name":"장인정신",
                                "explanation":"여태까지 지었던 마음에 안드는 미흡한 건물을 파괴한다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"베테랑의 건설",
                                "explanation":"어태커타워를 30개까지 건설할 수 있게 된다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A+A",
                                "name":"베테랑의 수리",
                                "explanation":"베테랑건축가의 힘으로 모든 타워를 수리한다.",
                                "type":"회복형"
                            },
                            {
                                "command":"O",
                                "name":"전설적인 건축가",
                                "explanation":"어태커타워건설한계를 없애버린다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"O+O",
                                "name":"연금술",
                                "explanation":"그는 눈을 감고 연금술에 집중한다. 연금술이 끝나면 무수히 많은 타워가 지어질것이니.",
                                "type":"유틸기"
                            }
                        ],
                        "buildings":[
                            {
                                "command":"PBP",
                                "name":"Shiny Tower",
                                "usage":"다른 건물을 짓기위해 필수적으로 필요한 건물입니다."
                            },
                            {
                                "command":"PBC",
                                "name":"Attacker Tower",
                                "usage":"모스트빌더의 모든 것입니다."
                            },
                            {
                                "command":"PBB",
                                "name":"방어보충소",
                                "usage":"모스트빌더의 쉴드를 채워줄 수 있는 건물입니다."
                            },
                            {
                                "command":"PVT",
                                "name":"궁극캐논",
                                "explanation":"궁극의 캐논을 소환합니다(이 캐논은 팀원 모두가 죽엇을경우 사용됩니다)(단 한번만 소환가능)",
                                "usage":"모스트빌더의 최종병기입니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"궁극캐논+PVT",
                                "name":"궁극캐논 재활용",
                                "explanation":"사용되지 않은 궁극의 캐논을 이동시킵니다.",
                                "usage":"궁극캐논을 지었으나 발동되지않고 스테이지가 끝났다면 다시 지어서 위치를 이동시킬 수 있습니다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"소서러",
                "image":"sorcerer.png",
                "spec1":1,
                "spec2":1,
                "spec3":3,
                "explanation":"적에게 저주를 걸어서 능력치를 낮추거나 쓰러뜨리는 조금 특이한 클래스입니다<br>다만 주의할점은 , 아군에게도 저주가 걸릴 수 있어서 위험할 지도 모릅니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"어둠의 제물",
                        "explanation":"피의 제물을 소환합니다 (컨슘)",
                        "type":"유틸기"
                    }
                ],
                "jobs":[
                    {
                        "name":"신앙자",
                        "nickname":"사신을 담당하는 자",
                        "battleType":"근거리형",
                        "role":"지원가&딜러",
                        "difficulty":"보통",
                        "explanation":[
                            "다양한 지원 스킬로 아군을 지원하는 직업입니다.",
                            "유일무이하게 적군에게 디버프를 거는 형식의",
                            "공격적인 지원형 직업이며, 직접 딜을 넣을수도 있습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"어둠의 제물",
                                "explanation":"피의 제물을 소환합니다 (컨슘)",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"패러라이즈",
                                "explanation":"잠시동안 주변에 적을 마비시켜 행동할 수 없게한다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"사신의 분노",
                                "explanation":"사신을 소환하여 분노케 한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"흑사병 (黑死丙)",
                                "explanation":"주변에 모든 생명체들을 극한의 상태로 만든다(자신체력50%이상으로유지)",
                                "type":"유틸기"
                            }
                        ]
                    },
                    {
                        "name":"네크로맨서",
                        "nickname":"죽음을 다루는 자",
                        "battleType":"유지형",
                        "role":"딜러&탱커",
                        "difficulty":"매우 어려움",
                        "explanation":[
                            "유지기를 사용하여 전투에 참전하는 직업입니다.",
                            "유지 유닛이 지상유닛이기 때문에 다른 직업보다",
                            "능숙한 부대컨트롤이 훨씬 요구됩니다.",
                            "초보자에게는 추천하지 않습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"어둠의 제물",
                                "explanation":"피의 제물을 소환합니다 (컨슘)",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"늑대소환",
                                "explanation":"야생의 늑대를 소환합니다.",
                                "type":"소환형"
                            },
                            {
                                "command":"A",
                                "name":"길로틴",
                                "explanation":"날카로운 톱날로 적을 갈라버린다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"리바이브 오브 데스티네이션",
                                "explanation":"죽은자들을 일정시간 동안 불러낸다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"은둔자",
                "image":"dmsenswk.png",
                "spec1":4,
                "spec2":1,
                "spec3":2,
                "explanation":"차원의 문에서 나온 자. 그는 자신이 동양이란 세상에서 왔다고 한다. <br>이 클래스는 무공이란 마법을 사용하고 검술도 사용하는 다재다능한 클래스입니다<br>파괴력도 쎄지만 내구력과 기동성 그리고 기술은 한 사람에게만 집중된 기술이기 때문에 다수의 적에겐 약합니다.",
                "skills":[
                    {
                        "command":"S",
                        "name":"회피",
                        "explanation":"적의 공격을 순간 회피합니다.",
                        "type":"유틸기"
                    }
                ],
                "jobs":[
                    {
                        "name":"자객",
                        "nickname":"살인을 즐기는 광기의 살육자",
                        "battleType":"유지형",
                        "role":"딜러",
                        "difficulty":"매우 어려움",
                        "explanation":[
                            "유지기를 사용하여 전투에 참전하는 직업입니다.",
                            "업그레이드로 딜량을 늘리기는 힘들지만 기본딜이 높습니다.",
                            "하지만 유지를위해서는 가스가 많이 요구됩니다.",
                            "초보자에게는 추천하지 않습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"회피",
                                "explanation":"적의 공격을 순간 회피합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"독둔화",
                                "explanation":"독으로 적을 둔화 시킨다.",
                                "type":"소환형"
                            },
                            {
                                "command":"독둔화+C",
                                "name":"분신영[分身影]",
                                "explanation":"주위의 대지를 달구어 아지랑이를 만든후에 현혹되기 쉬운 팔괘의 순서를 따라 움직여 적에게 몸이 나누어<br>진 듯한 착각을 일으키는 기술, 모두 허상이며 본체는 하나이다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"쾌속일검개[快速一劍皆]",
                                "explanation":"검에 집중력을 모아 한번에 격발 시키는 기술.",
                                "type":"공격형"
                            },
                            {
                                "command":"AA",
                                "name":"잠력초격발[潛力超激發]",
                                "explanation":"체내의 에너지를 기폭시켜 공격을 가한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"마라대검[魔我大劍]",
                                "explanation":"근육을 경직시켜 내려찍는 기술로서 외장과 내장의 공동파열시킨다.<br>기술로서 사용후에는 근육이 파손되어 요양이 필요하다.",
                                "type":"공격형"
                            }
                        ]
                    },
                    {
                        "name":"검신",
                        "nickname":"검술의 신",
                        "battleType":"유지형",
                        "role":"딜러",
                        "difficulty":"매우 어려움",
                        "explanation":[
                            "보스전에 특화된 고화력 고DPS 직업입니다.",
                            "보스 딜러임에도 불구하고 딜 스킬은 유지 구조로",
                            "되어있으며, 본체 관리도 매우 까다롭습니다.",
                            "초보자에게는 추천하지 않습니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"회피",
                                "explanation":"적의 공격을 순간 회피합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"검기(劍氣)",
                                "explanation":"검에 기운을 집중 발산하여 적을 베어버린다.",
                                "type":"공격형"
                            },
                            {
                                "command":"CC",
                                "name":"광속검기(光速劍氣)",
                                "explanation":"빠른속도로 적에게 대쉬한 후 검에 검기를 내뿜는다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"광속참(光速斬)",
                                "explanation":"순간적으로 민첩과 근력을 올려 적을 밴다<br>눈에 보이지 않을정도의 속도이기때문에 다수의 적들을 속수무책으로 죽인다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"명월강적(明月羌笛)",
                                "explanation":"달의 검기를 내어 벤다고 하여 붙여진 이름이다. 이 기술을 맞은  적은<br>얼음이 되어서 조각이 되어 죽는다는 금기기술이라고 한다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"크루세이더",
                "image":"crusader.png",
                "spec1":3,
                "spec2":3,
                "spec3":3,
                "explanation":"하늘의 가호를 받으며 싸우는 근접형 클래스입니다<br>힐러 없이도 회복을 할 수 있으며, 마법도 사용할 수 있지만 역시 극한의 능력을 보여주지는 않습니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"하늘의 축복",
                        "explanation":"하늘의 축복을 받아 방어막을 생성합니다. (9초)",
                        "type":"회복형"
                    }
                ],
                "jobs":[
                    {
                        "name":"크루세이더",
                        "nickname":"하늘의 가호를 받는 자",
                        "battleType":"근거리형",
                        "role":"딜러",
                        "difficulty":"쉬움",
                        "explanation":[
                            "본체가 직접 전투에 참여하는 직업이지만",
                            "독특하게 자신의 환영으로 대신 스킬을 쓸 수도 있습니다.",
                            "DPS가 높으면서도 딜 지속시간이 매우 긴",
                            "필드 보스 가리지 않는 딜러로 활약할 수 있습니다"
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"하늘의 축복",
                                "explanation":"하늘의 축복을 받아 방어막을 생성합니다. (9초, 중첩가능)",
                                "type":"회복형"
                            },
                            {
                                "command":"C",
                                "name":"낙뢰 (落雷)",
                                "explanation":"적에게 번개를 낙뢰하여 심판을 내린다. (누적가능)",
                                "type":"공격형"
                            },
                            {
                                "command":"AA",
                                "name":"얽힌 진실",
                                "explanation":"가장 왼쪽의 크루세이더로 이동하고 모든 환영을 새로 소환합니다.<br>쿨타임을 갱신합니다. 소모한 마나의 절반을 돌려받습니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"A",
                                "name":"균형의 수호자",
                                "explanation":"자신과 동일한 스킬을 사용할 수 있는 환영상태의 크루세이더 셋을 소환합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"O",
                                "name":"신의 분노",
                                "explanation":"적들의 작은 반란은 신의 노여움을 살 뿐이다.",
                                "type":"공격형"
                            }
                        ]
                    },
                    {
                        "name":"샤이닝 엠프레스",
                        "nickname":"빛을 조종하는 자",
                        "battleType":"근거리형",
                        "role":"지원가&힐러",
                        "difficulty":"쉬움",
                        "explanation":[
                            "아군에게 가스를 공급하고 치료하는 직업입니다.",
                            "딜을 거의 하지 않으며 아군을 지원하는 데에",
                            "온 힘을 다하는 직업입니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"하늘의 축복",
                                "explanation":"하늘의 축복을 받아 방어막을 생성합니다. (9초)",
                                "type":"회복형"
                            },
                            {
                                "command":"C",
                                "name":"빛의 화살",
                                "explanation":"빛으로 된 화살을 발사한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"오라 필드",
                                "explanation":"빛의 오라를 사용하여 전체의 HP를 회복한다.(주캐릭터만 회복)",
                                "type":"회복형"
                            },
                            {
                                "command":"CA",
                                "name":"라이트 볼",
                                "explanation":"빛의 구를 만들어 발사한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"암흑에너지방출",
                                "explanation":"암흑물질을 방출하여 주변에 잇는 모든 아군에게 특수한 영향을 줍니다<br>(체력100%, 마나상승, 쿨타임 존재)",
                                "type":"유틸기"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"라이더",
                "image":"rider.png",
                "spec1":1,
                "spec2":1,
                "spec3":5,
                "explanation":"어느 능력치하나 봐줄것이 없지만, 컨트롤만 잘한다면 굉장한 효력을 내는 클래스입니다<br>하지만 컨트롤을 못한다면 최악의 클래스이기때문에 , 초보자에게는 추천하지않습니다",
                "skills":[
                    {
                        "command":"S",
                        "name":"배터링",
                        "explanation":"순간적으로 적에게 공격을 퍼붓는다.",
                        "type":"공격형"
                    }
                ],
                "jobs":[
                    {
                        "name":"갓핸드",
                        "nickname":"신의 손을 가진 자",
                        "battleType":"원거리형",
                        "role":"딜러",
                        "difficulty":"어려움",
                        "explanation":[
                            "취향에 따라 스톤을 활용하여 딜러로 사용할 수 있지만,",
                            "스플에 주의해야 하며, 딜러 중에서는 딜이 낮은 편입니다.",
                            "적군을 컨트롤하는 기묘한 스킬을 활용하여",
                            "다른 아군을 구출하는 플레이도 가능합니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"배터링",
                                "explanation":"순간적으로 적에게 공격을 퍼붓는다.",
                                "type":"공격형"
                            },
                            {
                                "command":"지뢰+S",
                                "name":"손은 눈보다 빠르지",
                                "explanation":"자신과 지뢰의 위치를 바꾸며 체력을 모두 회복합니다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"C",
                                "name":"포격",
                                "explanation":"주변 적을 포격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"CCC",
                                "name":"더 나은 포격",
                                "explanation":"한층 업그레이드 된 포격을 날린다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"장거리 타격",
                                "explanation":"멀리서 적을 조준하여 포격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"에너미 컨트롤러",
                                "explanation":"주변에 있는 적들을 일정시간동안 조종한다. 그 후에 소멸시킨다.",
                                "type":"유틸기"
                            },
                            {
                                "command":"AAAAAA",
                                "name":"미스터리 스톤",
                                "explanation":"지옥에서 나온 알수 없는 거대한 암벽을 차원의 공간에서 소환합니다.",
                                "type":"소환형"
                            }
                        ]
                    },
                    {
                        "name":"파일럿",
                        "nickname":"공군을 조종하는 자",
                        "battleType":"원거리형",
                        "role":"딜러",
                        "difficulty":"쉬움",
                        "explanation":[
                            "딜 스킬은 매우 강력하고 단타성이며, 지속시간도",
                            "길다는 장점을 가지고 있습니다. 원거리 타입이기",
                            "때문에, 본체 관리에도 부담이 없습니다.",
                            "초보자에게 추천하는 직업입니다."
                        ],
                        "skills":[
                            {
                                "command":"S",
                                "name":"배터링",
                                "explanation":"순간적으로 적에게 공격을 퍼붓는다.",
                                "type":"공격형"
                            },
                            {
                                "command":"C",
                                "name":"공중폭격",
                                "explanation":"공중의 스카이라이더로 공격을 가한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"CC",
                                "name":"지원사격_함선포격",
                                "explanation":"공중 함선이 나타나 적을포격한다.",
                                "type":"공격형"
                            },
                            {
                                "command":"A",
                                "name":"융단폭격",
                                "explanation":"지정한 지점에 융단폭격을 합니다.",
                                "type":"공격형"
                            },
                            {
                                "command":"O",
                                "name":"대규모 전략 폭격",
                                "explanation":"대규모 전략 폭격을 감행합니다. 폭격이 지나간 자리는 모든 것이 파괴될 것입니다.",
                                "type":"공격형"
                            }
                        ]
                    }
                ]
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
]