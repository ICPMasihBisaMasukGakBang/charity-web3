import { 
    createActor as createCharityActor,
    canisterId as charityCanisterId
} from "../declarations/charity";

export const makeActor = (canisterId, createActor) => {
    return createActor(canisterId, {
        agentOptions: {
            host: process.env.NEXT_PUBLIC_IC_HOST
        }
    });
}

export function makeCharityActor() {
    return makeActor(charityCanisterId, createCharityActor);
}