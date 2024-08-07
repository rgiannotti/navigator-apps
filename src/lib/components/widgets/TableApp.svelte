<script lang="ts">
  import { Send } from "lucide-svelte";

  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Table from "$lib/components/ui/table/index.js";

  export let data: any;
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Apps</Card.Title>
    <Card.Description>
      Manage your apps and view their performance.
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head class="hidden w-[100px] sm:table-cell">
            <span class="sr-only">Logo</span>
          </Table.Head>
          <Table.Head>Name</Table.Head>
          <Table.Head>Tags</Table.Head>
          <Table.Head>Description</Table.Head>
          <Table.Head>
            <span class="sr-only">Actions</span>
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each data as app}
          <Table.Row>
            <Table.Cell class="hidden sm:table-cell">
              <img
                src={app.icon}
                alt={app.name}
                class="aspect-square rounded-md object-cover"
                height="64"
                width="64"
              />
            </Table.Cell>
            <Table.Cell class="font-medium">{app.name}</Table.Cell>
            <Table.Cell>
              {#each app.tags as tag}
                <Badge class="mr-1">{tag}</Badge>
              {/each}
            </Table.Cell>
            <Table.Cell>{app.description}</Table.Cell>
            <Table.Cell>
              <a href="/{app.id}">
                <Send class="h-4 w-4 m-auto" />
              </a>
              <!-- <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild let:builder>
                  <Button
                    aria-haspopup="true"
                    size="icon"
                    variant="ghost"
                    builders={[builder]}
                  >
                    <Ellipsis class="h-4 w-4" />
                    <span class="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content align="end">
                  <DropdownMenu.Label>Actions</DropdownMenu.Label>
                  <DropdownMenu.Item>Edit</DropdownMenu.Item>
                  <DropdownMenu.Item>Delete</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root> -->
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </Card.Content>
  <!-- <Card.Footer>
    <div class="text-muted-foreground text-xs">
      Showing <strong>1-10</strong> of <strong>32</strong> products
    </div>
  </Card.Footer> -->
</Card.Root>
