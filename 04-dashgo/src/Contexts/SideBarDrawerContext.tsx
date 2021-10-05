/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SideBarContextProviderProps {
  children: ReactNode
}

interface SideBarContextDataProps extends UseDisclosureReturn {
}

const SideBarContext = createContext({} as SideBarContextDataProps)

export function SideBarDrawerProvider({children}:SideBarContextProviderProps ){
  const router = useRouter()
  const disclosure = useDisclosure()
  
  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])
  
  useEffect
  return (
    <SideBarContext.Provider value={disclosure}>
      {children}
    </SideBarContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SideBarContext)