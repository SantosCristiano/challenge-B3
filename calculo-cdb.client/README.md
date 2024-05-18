# calculo_cdb

Challenge B3 - CDB Calculation

![Result Calculation](https://teckins.com/img/projetos/B3.png)

## CDB calculation

(FrontEnd) Angular, TypeScript and Bootstrap [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2

(BackEnd) C# and ASP.NET Core [ASP.NET](https://dotnet.microsoft.com/en-us/apps/aspnet)

## Installation

### 1 - Clone the repository 

``` git clone https://github.com/SantosCristiano/challenge-B3 ```

### 2 - Enter folder 

``` cd challenge-B3 ```

### 3 - Enter folder 

``` cd calculo-cdb.Server ```

### 4 - Run 

``` dotnet build ```

## Run application

### 1 - Run Easy

``` Click in Button Iniciar (Back e Front) ```

### 2 - OR Run Back (localhost:5089)

``` dotnet run ```

### 3 - AND Run Front (localhost:4200)

``` npm start ```

## Running unit tests and logical layer coverage reports 

``` coverlet.collector ```

``` coverlet.msbuild ```

``` MSTest.TestFramework ```

### 1 - Enter folder 

``` ./challenge-B3/calculo-cdb.Test ```

### 2 - Run

``` dotnet test --filter 'FullyQualifiedName!~calculo0cdb.Tests' /p:CollectCoverage=true ```

## Running unit tests in Angular

### 1 - Enter folder 

``` cd calculo-cdb.client ```

### 2 - Run

``` ng test ```

 Unit tests via [Karma](https://karma-runner.github.io).
