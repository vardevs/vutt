/*
 * action types
 */

export const OPEN_EMAIL = 'OPEN_EMAIL'

/*
 * other constants
 */

/*
 * action creators
 */

export function openEmail(id) {
    return { type: OPEN_EMAIL, id }
}
