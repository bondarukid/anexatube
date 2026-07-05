import type { LucideIcon } from "lucide-react"
import {
  BabyIcon,
  ClapperboardIcon,
  CrownIcon,
  Gamepad2Icon,
  HistoryIcon,
  ListVideoIcon,
  Music2Icon,
  MusicIcon,
  SquarePlayIcon,
  SquareUserIcon,
  ThumbsUpIcon,
} from "lucide-react"
import { PROJECT_NAME } from "@/lib/project"

export type DemoUser = {
  name: string
  email: string
  avatar: string
}

export type SubscriptionChannel = {
  id: string
  name: string
  hasNew: boolean
}

export type NavItem = {
  title: string
  icon: LucideIcon
}

export const demoUser: DemoUser = {
  name: "shadcn",
  email: "m@example.com",
  avatar: "",
}

export const INITIAL_SUBSCRIPTION_COUNT = 7

export const demoSubscriptions: SubscriptionChannel[] = [
  { id: "1", name: "Pixel Orchard", hasNew: true },
  { id: "2", name: "Neon Kettle", hasNew: true },
  { id: "3", name: "Veloscope", hasNew: true },
  { id: "4", name: "Quokka Works", hasNew: true },
  { id: "5", name: "Bramble & Byte", hasNew: false },
  { id: "6", name: "Loftwave Studio", hasNew: false },
  { id: "7", name: "Tundra Notes", hasNew: false },
  { id: "8", name: "Copper Finch", hasNew: true },
  { id: "9", name: "Midnight Ledger", hasNew: false },
  { id: "10", name: "Patchwork Signals", hasNew: true },
  { id: "11", name: "Hollow Atlas", hasNew: false },
  { id: "12", name: "Rye Compass", hasNew: false },
  { id: "13", name: "Lantern District", hasNew: true },
  { id: "14", name: "Kettle Theory", hasNew: false },
  { id: "15", name: "Frostbyte Radio", hasNew: false },
  { id: "16", name: "Marigold Mechanics", hasNew: true },
  { id: "17", name: "Paper Voyage", hasNew: false },
  { id: "18", name: "Cedar & Circuits", hasNew: false },
  { id: "19", name: "Blinkhive", hasNew: true },
  { id: "20", name: "Orbit Parlor", hasNew: false },
  { id: "21", name: "Mossline Archive", hasNew: false },
  { id: "22", name: "Driftwood Syntax", hasNew: true },
  { id: "23", name: "Glass Harbor Lab", hasNew: false },
  { id: "24", name: "Wrenfield Collective", hasNew: false },
]

export const demoYouNavItems: NavItem[] = [
  { title: "Your channel", icon: SquareUserIcon },
  { title: "History", icon: HistoryIcon },
  { title: "Playlists", icon: ListVideoIcon },
  { title: "Liked videos", icon: ThumbsUpIcon },
  { title: "Your videos", icon: SquarePlayIcon },
]

export const demoMoreNavItems: NavItem[] = [
  { title: `${PROJECT_NAME} Premium`, icon: CrownIcon },
  { title: `${PROJECT_NAME} Music`, icon: Music2Icon },
  { title: `${PROJECT_NAME} Kids`, icon: BabyIcon },
]

export const demoExploreNavItems: NavItem[] = [
  { title: "Music", icon: MusicIcon },
  { title: "Movies", icon: ClapperboardIcon },
  { title: "Gaming", icon: Gamepad2Icon },
]

export const demoFooterLinks = [
  ["About", "Press", "Copyright", "Contact us", "Creators"],
  ["Advertise", "Developers"],
  ["Terms", "Privacy", "Policy & Safety", `How ${PROJECT_NAME} works`],
  ["Test new features"],
] as const

export const demoFooterCopyright = "© 2026 Ivan Bondaruk"

export const demoCategories = [
  "All",
  "Video games",
  "Music",
  "Jams",
  "Live",
  "Action & adventure",
  "Simulators",
  "Crafts",
  "Nature",
  "Recently uploaded",
  "Watched",
  "New for you",
] as const

export type DemoCategory = (typeof demoCategories)[number]

export const demoDefaultCategory: DemoCategory = "All"
