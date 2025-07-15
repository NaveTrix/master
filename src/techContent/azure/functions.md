# Azure Functions

Azure Functions enable serverless compute in the cloud.

```csharp
[FunctionName("HelloFunction")]
public static IActionResult Run(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,
    ILogger log)
{
    return new OkObjectResult("Hello from Azure Function");
}
```

## Use Cases

- Event-driven logic
- Scheduled tasks
- API endpoints
