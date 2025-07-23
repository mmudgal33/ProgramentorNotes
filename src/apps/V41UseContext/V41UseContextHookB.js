import { V41UseContextHookC } from './V41UseContextHookC'

import { useContext } from 'react'
import { skillContext } from './V41UseContextHook'

export function V41UseContextHookB() {
  const mySkill = useContext(skillContext)
  return (
    <div>
      <h1>V41UseContextHookB {mySkill}</h1>
      <V41UseContextHookC />
    </div>
  )
}