import { createApi } from "@reduxjs/toolkit/query/react";
import { PairingConfig } from "./models/pairing.model";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery() {
        return { data: [] };
    },
    tagTypes: ["pairing"],
    endpoints: (build) => ({
        getPairingConfig: build.query<PairingConfig[], { wearableId: string }>({
            query() {
                return [];
            },
            async onCacheEntryAdded(
                args,
                { cacheEntryRemoved, updateCachedData, cacheDataLoaded }
            ) {
                await cacheDataLoaded;
                const ws = new WebSocket(
                    `${process.env.REACT_APP_PAIRING_ENDPOINT}/pin/request?wearable_id=${args.wearableId}&timeout=0`
                );
                console.log(ws)

                try {
                    const listener = (event: MessageEvent) => {
                        const data: PairingConfig = JSON.parse(event.data);
                        console.log(data);
                        updateCachedData((draft) => {
                            draft.pop()
                            draft.push(data)
                        });
                    };
                    
                    ws.addEventListener('message', listener)
                } catch {}
                await cacheEntryRemoved
                ws.close()
            },
        }),
    }),
});

export const { useGetPairingConfigQuery } = apiSlice;
