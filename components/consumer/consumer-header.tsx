"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeModeToggle } from "@/components/theme-mode-toggle"
import { useSiteUrls } from "@/components/site-urls-provider"
import {
  type DemoCategory,
  demoCategories,
  demoDefaultCategory,
} from "@/lib/demo-data"
import {
  KeyboardIcon,
  MicIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

export function ConsumerHeader() {
  const { studioUrl } = useSiteUrls()
  const [activeCategory, setActiveCategory] =
    React.useState<DemoCategory>(demoDefaultCategory)

  return (
    <header className="sticky top-0 z-20 shrink-0 bg-background">
      <div className="flex h-14 items-center gap-3 px-4">
        <SidebarTrigger className="-ml-1 md:hidden" />

        <form
          className="mx-auto flex w-full max-w-3xl flex-1 items-center gap-3"
          onSubmit={(event) => event.preventDefault()}
        >
          <ButtonGroup className="min-w-0 flex-1 rounded-full">
            <InputGroup className="h-10 flex-1 rounded-none rounded-l-full border-border/60 bg-secondary/80 shadow-none dark:bg-secondary/40">
              <InputGroupInput
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="h-10 pl-4"
              />
              <InputGroupAddon align="inline-end">
                <KeyboardIcon aria-hidden />
              </InputGroupAddon>
            </InputGroup>
            <Button
              type="submit"
              variant="outline"
              size="icon"
              aria-label="Search"
              className="size-10 rounded-none rounded-r-full"
            >
              <SearchIcon />
            </Button>
          </ButtonGroup>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Search with your voice"
            className="hidden size-10 shrink-0 rounded-full sm:inline-flex"
          >
            <MicIcon />
          </Button>
        </form>

        <ThemeModeToggle />

        <Button
          variant="outline"
          nativeButton={false}
          render={<a href={studioUrl} />}
        >
          <PlusIcon /> Create
        </Button>
      </div>

      <ScrollArea className="w-full">
        <div className="flex w-max min-w-full gap-2 px-4 py-3">
          {demoCategories.map((category) => (
            <Button
              key={category}
              type="button"
              variant="outline"
              size="sm"
              aria-pressed={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </header>
  )
}
