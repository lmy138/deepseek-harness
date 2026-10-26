import type { Context } from '@deepseek-ai/cordis'

export const name = 'hello-plugin'

/**
 * 在插件加载时输出问候信息。
 * @param ctx 当前插件的上下文。
 */
export function apply(ctx: Context) {
  console.log('[hello-plugin] plugin loaded!')
}