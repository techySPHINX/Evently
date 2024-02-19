import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
    publicRoutes: [
        '/',
        '/events/:id',
        '/api/webhook/clerk',
        '/api/uploadthing',
        '/api/webhook/stripe',
    ],
    ignoredRoutes: [
        '/api/webhook/clerk',
        '/api/uploadthing',
        '/api/webhook/stripe',
    ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

//clerk middleware is finally setupds
