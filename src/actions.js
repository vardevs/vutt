/*
 * action types
 */

export const ACTIVATE_EMAIL = 'ACTIVATE_EMAIL'

/*
 * action creators
 */

export function activateEmail(id) {
  return { type: ACTIVATE_EMAIL, id }
}
