// stackbit.config.ts
import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from "@stackbit/types";
import { HumanitarianActicity } from "./modules/HumanitarianActivity/HumanitarianActivityInfo";

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    ssgName: 'nextjs',
    nodeVersion: '20',
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ['content'],
            models: [HumanitarianActicity],
            assetsConfig: {
                referenceType: 'static',
                staticDir: 'public',
                uploadDir: 'images',
                publicPath: '/'
            }
        })
    ]
});