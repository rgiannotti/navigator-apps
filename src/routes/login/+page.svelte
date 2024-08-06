<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js'
	import { Input } from '$lib/components/ui/input/index.js'
	import { Label } from '$lib/components/ui/label/index.js'
	import { enhance } from '$app/forms'

	const keyDownEnter = (e: any) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			document.getElementById('form')?.dispatchEvent(new Event('submit'))
		}
	}
</script>

<div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-screen">
	<div class="bg-muted hidden lg:block">
		<img
			src="https://img2.wallspic.com/crops/2/6/3/0/80362/80362-maqueta-3840x2160.jpg"
			alt="placeholder"
			width="1920"
			height="1080"
			class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
	<div class="flex items-center justify-center py-12">
		<div class="mx-auto grid w-[350px] gap-6">
			<div class="grid gap-2 text-center">
				<h1 class="text-3xl font-bold">Login</h1>
				<p class="text-muted-foreground text-balance">
					Enter your email below to login to your account
				</p>
			</div>
			<div class="grid gap-4">
				<form id="form" action="?/login" method="POST" use:enhance>
					<div class="grid gap-2">
						<Label for="email">Email</Label>
						<Input
							type="text"
							id="email"
							name="email"
							placeholder="m@email.com"
							required
							on:keydown={keyDownEnter}
							maxlength={100}
						/>
					</div>
					<div class="grid gap-2">
						<div class="flex items-center">
							<Label for="password">Password</Label>
							<a href="##" class="ml-auto inline-block text-sm underline">
								Forgot your password?
							</a>
						</div>
						<Input
							id="password"
							type={'password'}
							class="block w-full  !bg-gray-50 !text-gray-900 !border-gray-300 !text-base rounded"
							name="password"
							placeholder="**********"
							required
							on:keydown={keyDownEnter}
							maxlength={100}
						/>
					</div>
					<Button type="submit" class="w-full mt-4">Login</Button>
					<Button variant="outline" class="w-full mt-4">Login with Google</Button>
				</form>
			</div>
			<div class="mt-4 text-center text-sm">
				Don&apos;t have an account?
				<a href="##" class="underline"> Sign up </a>
			</div>
		</div>
	</div>
</div>
