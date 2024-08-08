import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Component } from "@/components/component/component";



export default async function Home() {
  const user = await currentUser()
  const username = user?.username
  const welcomeSuffix = username ? `, ${username}` : ''

  return (
    <main>
      {/* <h1> Welcome {welcomeSuffix}</h1> */}
      {/* <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Home</MenubarTrigger>
    <MenubarTrigger>Features</MenubarTrigger>
    <MenubarTrigger>Pricing</MenubarTrigger>
    <a href='/dashboard'>
    <MenubarTrigger>Dashboard</MenubarTrigger>
    </a>
  </MenubarMenu>
</Menubar> */}
  <Component />
    </main>
  );
}
