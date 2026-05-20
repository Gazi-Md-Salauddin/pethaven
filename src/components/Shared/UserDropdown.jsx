import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {Button, Avatar, Dropdown, Label} from "@heroui/react";
import Link from 'next/link'
import { authClient } from "@/lib/auth-client";

const UserDropdown = () => {
  const { data: session } = authClient.useSession();
    const user = session?.user;
  
  const handleLogout = async () => {
        await authClient.signOut();
    };
  
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt={user?.name}
            src={user?.image}
          />
          <Avatar.Fallback delayMs={600}>{user.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
              />
              <Avatar.Fallback delayMs={600}>{user.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Link href="/dashboard" className="font-bold">Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout">
            <div className="flex w-full items-center justify-between gap-2">
              <Button onClick={handleLogout} variant="danger">Logout</Button>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
export default UserDropdown