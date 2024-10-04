# Use the official .NET SDK image for building the application
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the project file and restore the dependencies
COPY ProjetWebApi/*.csproj ./ProjetWebApi/
RUN dotnet restore ./ProjetWebApi/ProjetWebApi.csproj

# Copy the rest of the application files to the working directory
COPY . .

# Set the working directory to the project folder
WORKDIR /app/ProjetWebApi

# Build the application in Release mode
RUN dotnet build -c Release -o /app/build

# Publish the application to the /app/out directory
RUN dotnet publish -c Release -o /app/out

# Use a smaller runtime image for the final application
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime

# Set the working directory for the runtime
WORKDIR /app

# Copy the published application from the build stage
COPY --from=build /app/out ./

# Set the entry point for the application
ENTRYPOINT ["dotnet", "ProjetWebApi.dll"]

