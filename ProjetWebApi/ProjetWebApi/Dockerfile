# Use the SDK image to build the application
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ./backend/*.csproj ./backend/
RUN dotnet restore ./backend/*.csproj
COPY ./backend/. ./
RUN dotnet publish -c Release -o /app

# Use the runtime image to run the application
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "YourBackendApp.dll"]

