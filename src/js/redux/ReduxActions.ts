import { ActionCreatorsMapObject } from 'redux';

export interface Action<T extends string> {
    type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P;
    error: false;
}

export interface ActionWithError<T extends string> extends Action<T> {
    payload: Error;
    error: true;
}

export type AnyAction =
    | Action<any>
    | ActionWithPayload<any, any>
    | ActionWithError<any>;

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<
    T extends string,
    P extends Exclude<any, Error>,
    M
>(type: T, payload: P, error?: false): ActionWithPayload<T, P>;
export function createAction<T extends string, P>(
    type: T,
    payload: Error,
    error: true
): ActionWithError<T>;
export function createAction<T extends string, P>(
    type: T,
    payload: P,
    error: boolean
): ActionWithPayload<T, Exclude<P, Error>> | ActionWithError<T>;
export function createAction<T extends string, P>(
    type: T,
    payload?: P,
    error: boolean = false
) {
    return payload === undefined ? { type } : { type, payload, error };
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = Extract<
    ReturnType<A[keyof A]>,
    AnyAction
>;