import { APIErrorCode, ClientErrorCode, isNotionClientError } from "@notionhq/client"

export const checkErrorNotion = (error: any) => {
    if (isNotionClientError(error)) {
        // error is now strongly typed to NotionClientError
        switch (error.code) {
            case ClientErrorCode.RequestTimeout:
                // ...
                break
            case APIErrorCode.ObjectNotFound:
                // ...
                break
            case APIErrorCode.Unauthorized:
                // ...
                break
            // ...
            default:
                // you could even take advantage of exhaustiveness checking
                console.error(error.code)
                break
        }
    }
    return error
}