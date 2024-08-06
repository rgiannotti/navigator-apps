<script lang="ts">
  import Home from "lucide-svelte/icons/house";
  import LineChart from "lucide-svelte/icons/chart-line";
  import Package from "lucide-svelte/icons/package";
  import PanelLeft from "lucide-svelte/icons/panel-left";
  import Package2 from "lucide-svelte/icons/package-2";
  import Settings from "lucide-svelte/icons/settings";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";
  import UsersRound from "lucide-svelte/icons/users-round";

  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
</script>

<div class="bg-muted/40 flex min-h-screen w-full flex-col">
  <aside
    class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex"
  >
    <nav class="flex flex-col items-center gap-4 px-2 py-4">
      <a
        href="##"
        class="bg-primary text-primary-foreground group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base"
      >
        <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href="##"
            class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
            use:builder.action
            {...builder}
          >
            <Home class="h-5 w-5" />
            <span class="sr-only">Dashboard</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Dashboard</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href="##"
            class="bg-accent text-accent-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
            use:builder.action
            {...builder}
          >
            <ShoppingCart class="h-5 w-5" />
            <span class="sr-only">Orders</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Orders</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href="##"
            class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
            use:builder.action
            {...builder}
          >
            <Package class="h-5 w-5" />
            <span class="sr-only">Products</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Products</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href="##"
            class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
            use:builder.action
            {...builder}
          >
            <UsersRound class="h-5 w-5" />
            <span class="sr-only">Customers</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Customers</Tooltip.Content>
      </Tooltip.Root>
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href="##"
            class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
            use:builder.action
            {...builder}
          >
            <LineChart class="h-5 w-5" />
            <span class="sr-only">Analytics</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Analytics</Tooltip.Content>
      </Tooltip.Root>
    </nav>
    <nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4">
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a
            href="##"
            class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
            use:builder.action
            {...builder}
          >
            <Settings class="h-5 w-5" />
            <span class="sr-only">Settings</span>
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Settings</Tooltip.Content>
      </Tooltip.Root>
    </nav>
  </aside>
  <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <header
      class="bg-background sticky top-0 z-30 flex h-14 items-center gap-4 border-b px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
    >
      <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            size="icon"
            variant="outline"
            class="sm:hidden"
          >
            <PanelLeft class="h-5 w-5" />
            <span class="sr-only">Toggle Menu</span>
          </Button>
        </Sheet.Trigger>
        <Sheet.Content side="left" class="sm:max-w-xs">
          <nav class="grid gap-6 text-lg font-medium">
            <a
              href="##"
              class="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
            >
              <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
            >
              <Home class="h-5 w-5" />
              Dashboard
            </a>
            <a href="##" class="text-foreground flex items-center gap-4 px-2.5">
              <ShoppingCart class="h-5 w-5" />
              Orders
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
            >
              <Package class="h-5 w-5" />
              Products
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
            >
              <UsersRound class="h-5 w-5" />
              Customers
            </a>
            <a
              href="##"
              class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
            >
              <LineChart class="h-5 w-5" />
              Settings
            </a>
          </nav>
        </Sheet.Content>
      </Sheet.Root>
      <Breadcrumb.Root class="hidden md:flex">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="##">Navigator</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Home</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <div class="relative ml-auto flex-1 md:grow-0">
        <!-- <Search
            class="text-muted-foreground absolute left-2.5 top-2.5 h-4 w-4"
          />
          <Input
            type="search"
            placeholder="Search..."
            class="bg-background w-full rounded-lg pl-8 md:w-[200px] lg:w-[320px]"
          /> -->
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            variant="outline"
            size="icon"
            class="overflow-hidden rounded-full"
            builders={[builder]}
          >
            <img
              src="https://navigator-new.dev.trocdigital.io/images/troc.png"
              width={36}
              height={36}
              alt="Avatar"
              class="overflow-hidden rounded-full"
            />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Label>My Account</DropdownMenu.Label>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Settings</DropdownMenu.Item>
          <DropdownMenu.Item>Support</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Logout</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </header>
    <slot />
  </div>
</div>
