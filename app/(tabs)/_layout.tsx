import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

const Tabicon=({focused,icon,title}:any)=>{
    return(
        <>
          <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[100px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden'>
                  <Image source={icon} tintColor="#151313" className="size-5"/>
                  <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
          </ImageBackground>
        </>
        
    )
}

const _layout = () => {

  return (
    <Tabs>
        <Tabs.Screen
        name="index"
        options={{
            title:"Home",
            headerShown : false,
            tabBarIcon :({ focused })=> (
                <Tabicon focused={focused}
                icon={icons.home}
                title="Home"
                />
            )

        }}
        />
        <Tabs.Screen
        name='search'
        options={{
            title:"Search",
            headerShown:false,
            tabBarIcon:({focused}) =>(
                <Tabicon focused={focused}
                icon={icons.search}
                title="Search"
                />
            )
        }}
        />
        <Tabs.Screen
        name='saved'
        options={{
            title:"Saved",
            headerShown:false,
            tabBarIcon:({focused}) =>(
                <Tabicon focused={focused}
                icon={icons.save}
                title="saved"
                />
            )
        }}
        />
        <Tabs.Screen
        name='profile'
        options={{
            title:"Profile",
            headerShown:false,
            tabBarIcon:({focused}) =>(
                <Tabicon focused={focused}
                icon={icons.person}
                title="profile"
                />
            )
        }}
        />
    </Tabs>
  )
}
 
export default _layout