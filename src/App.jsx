import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Plane, Cpu, Bot, ShieldCheck, Clock3, Wallet, Search, CalendarDays, Users, ArrowRight, MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const routes = [
  { from: "Taipei", to: "Tokyo", duration: "3h 10m", price: 420000 },
  { from: "Taipei", to: "Seoul", duration: "2h 35m", price: 350000 },
  { from: "Taipei", to: "Singapore", duration: "4h 25m", price: 780000 },
  { from: "Taipei", to: "Bangkok", duration: "3h 50m", price: 520000 },
];

const features = [
  {
    icon: ShieldCheck,
    title: "AI 飛行安全系統",
    desc: "以 ASUS 高效運算平台結合 EVA Air 航務標準，提供全天候即時監測與輔助決策。",
  },
  {
    icon: Bot,
    title: "機器人客艙服務",
    desc: "由智慧型機器人提供引導、送餐、旅客服務與多語互動，打造全新登機體驗。",
  },
  {
    icon: Clock3,
    title: "24 小時彈性營運",
    desc: "透過 AI 調度與自動化流程，提升航班密度與營運效率，縮短等待時間。",
  },
  {
    icon: Wallet,
    title: "更有效率的票價結構",
    desc: "自動化運營降低整體成本，讓高科技飛行服務更有機會貼近大眾市場。",
  },
];

const highlights = [
  "AI Captain Autonomous Flight Core",
  "Robotic Cabin Crew by Intelligent Service System",
  "ASUS Computing + EVA Air Flight Experience",
  "Real-time weather, route, and passenger adaptation",
];

function Currency({ value }) {
  return <span>NT$ {value.toLocaleString()}</span>;
}

export default function EvaAsusAviationSite() {
  const [tripType, setTripType] = useState("round");
  const [from, setFrom] = useState("Taipei");
  const [to, setTo] = useState("Tokyo");
  const [date, setDate] = useState("2026-04-20");
  const [passengers, setPassengers] = useState("1");

  const selectedRoute = useMemo(() => {
    return routes.find((r) => r.from === from && r.to === to) || routes[0];
  }, [from, to]);

  const estimatedPrice = useMemo(() => {
    const base = selectedRoute?.price || 0;
    const pax = Number(passengers || 1);
    return tripType === "round" ? base * pax * 2 : base * pax;
  }, [selectedRoute, passengers, tripType]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-2">
                <Plane className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm tracking-[0.25em] text-emerald-300">EVA AIR × ASUS</div>
                <div className="text-xs text-slate-300">Autonomous Passenger Aviation</div>
              </div>
            </div>
            <div className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
              <a href="#concept" className="hover:text-white">概念介紹</a>
              <a href="#features" className="hover:text-white">核心技術</a>
              <a href="#booking" className="hover:text-white">立即訂票</a>
              <a href="#experience" className="hover:text-white">搭乘體驗</a>
            </div>
          </div>

          <div className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-emerald-200">
                  Future Flight Collaboration Concept
                </Badge>
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                  下一代無人載客飛行
                  <span className="block text-emerald-300">AI 機長 × 機器人服務員</span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  這是一個以 EVA Air 航空體驗結合 ASUS 智慧運算技術打造的未來航空概念網站。
                  乘客將透過全新的售票系統，預訂由 AI 駕駛、機器人客艙服務支援的智慧航班。
                </p>
              </motion.div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-2xl bg-emerald-400 px-6 text-slate-950 hover:bg-emerald-300">
                  立即探索航班
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 text-white hover:bg-white/10">
                  查看合作概念
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              id="booking"
            >
              <Card className="rounded-[28px] border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">智慧航班售票系統</CardTitle>
                  <CardDescription className="text-slate-300">
                    搜尋 AI 駕駛航班、選擇日期、預估票價，快速完成未來航班預訂。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={tripType} onValueChange={setTripType} className="w-full">
                    <TabsList className="grid w-full grid-cols-2 rounded-2xl bg-slate-900/60">
                      <TabsTrigger value="round" className="rounded-2xl">來回</TabsTrigger>
                      <TabsTrigger value="oneway" className="rounded-2xl">單程</TabsTrigger>
                    </TabsList>
                    <TabsContent value={tripType} className="mt-6 space-y-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-slate-200">出發地</Label>
                          <Select value={from} onValueChange={setFrom}>
                            <SelectTrigger className="rounded-2xl border-white/10 bg-slate-950/60 text-white">
                              <SelectValue placeholder="選擇出發地" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Taipei">Taipei</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-200">目的地</Label>
                          <Select value={to} onValueChange={setTo}>
                            <SelectTrigger className="rounded-2xl border-white/10 bg-slate-950/60 text-white">
                              <SelectValue placeholder="選擇目的地" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Tokyo">Tokyo</SelectItem>
                              <SelectItem value="Seoul">Seoul</SelectItem>
                              <SelectItem value="Singapore">Singapore</SelectItem>
                              <SelectItem value="Bangkok">Bangkok</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label className="text-slate-200">出發日期</Label>
                          <div className="relative">
                            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="rounded-2xl border-white/10 bg-slate-950/60 pl-10 text-white"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-slate-200">乘客人數</Label>
                          <Select value={passengers} onValueChange={setPassengers}>
                            <SelectTrigger className="rounded-2xl border-white/10 bg-slate-950/60 text-white">
                              <SelectValue placeholder="乘客人數" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 位</SelectItem>
                              <SelectItem value="2">2 位</SelectItem>
                              <SelectItem value="3">3 位</SelectItem>
                              <SelectItem value="4">4 位</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="text-sm text-emerald-200">推薦 AI 航班</div>
                            <div className="mt-2 flex items-center gap-2 text-xl font-semibold text-white">
                              <MapPin className="h-5 w-5 text-emerald-300" />
                              {selectedRoute.from}
                              <ArrowRight className="h-4 w-4" />
                              {selectedRoute.to}
                            </div>
                            <div className="mt-2 text-sm text-slate-200">
                              飛行時間 {selectedRoute.duration} ・ AI 機長執飛 ・ 機器人客艙服務
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-300">預估票價</div>
                            <div className="mt-2 text-2xl font-semibold text-white">
                              <Currency value={estimatedPrice} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button className="h-12 w-full rounded-2xl bg-white text-slate-950 hover:bg-slate-100">
                        <Search className="mr-2 h-4 w-4" />
                        搜尋並前往訂票
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="concept" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-[28px] border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Cpu className="h-5 w-5 text-emerald-300" />
                ASUS 智慧核心
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              以高效能 AI 運算、資料分析與感測整合能力，支持自主飛行決策與航班運作監控。
            </CardContent>
          </Card>
          <Card className="rounded-[28px] border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Plane className="h-5 w-5 text-emerald-300" />
                EVA Air 航空體驗
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              將既有航空服務流程、旅客接觸點與品牌信任延伸至新型智慧客運飛行服務。
            </CardContent>
          </Card>
          <Card className="rounded-[28px] border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Bot className="h-5 w-5 text-emerald-300" />
                機器人客艙互動
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              提供引導登機、智慧餐飲配送、即時翻譯與個人化服務，提升整體飛行體驗一致性。
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="features" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-sm tracking-[0.25em] text-emerald-300">CORE FEATURES</div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">未來航班的四大核心能力</h2>
            <p className="mt-4 text-slate-300">
              不只是概念展示，也讓訪客快速理解這個合作網站的技術亮點與商業價值。
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} whileHover={{ y: -4 }}>
                  <Card className="h-full rounded-[28px] border-white/10 bg-slate-950/70 text-white">
                    <CardHeader>
                      <div className="mb-3 w-fit rounded-2xl bg-emerald-400/10 p-3">
                        <Icon className="h-5 w-5 text-emerald-300" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-slate-300">{feature.desc}</CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm tracking-[0.25em] text-emerald-300">PASSENGER EXPERIENCE</div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">重新定義搭乘流程</h2>
            <p className="mt-4 leading-8 text-slate-300">
              從訂票、報到、登機到飛行中服務，網站以簡潔而高科技的介面呈現未來航空服務想像。
            </p>

            <div className="mt-8 space-y-4">
              {[
                "智慧搜尋最適航線與票價",
                "AI 根據天候與航點動態調整飛行策略",
                "機器人服務員提供多語旅客服務",
                "個人化艙內互動與即時旅程資訊",
              ].map((item, idx) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-300">
                    {idx + 1}
                  </div>
                  <div className="pt-1 text-slate-200">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-[32px] border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">熱門概念航線</CardTitle>
              <CardDescription className="text-slate-300">以售票系統視角展示未來可開放的智慧航班。</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {routes.map((route) => (
                <div key={`${route.from}-${route.to}`} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <div>
                    <div className="flex items-center gap-2 text-lg font-medium text-white">
                      {route.from} <ArrowRight className="h-4 w-4" /> {route.to}
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-sm text-slate-300">
                      <span>{route.duration}</span>
                      <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> Autonomous Cabin</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-300">單人單程起</div>
                    <div className="mt-1 text-lg font-semibold text-white"><Currency value={route.price} /></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-2 text-emerald-300">
              <Star className="h-4 w-4" />
              Concept Website Draft
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">EVA Air × ASUS 未來智慧航空合作網站</h3>
            <p className="mt-2 text-slate-300">
              目前版本已包含品牌首頁、概念介紹、核心技術、搭乘體驗與基本售票系統介面。
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="rounded-2xl bg-emerald-400 px-6 text-slate-950 hover:bg-emerald-300">
              繼續擴充頁面
            </Button>
            <Button variant="outline" className="rounded-2xl border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
              查看 Prototype
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
