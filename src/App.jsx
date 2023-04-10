import React from "react";
import "./App.scss";
import MainPage from "./Components/Pages/MainPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ProfileProvider } from "./Components/Utilities/Reducers/ProfileReducer";
import { AuthProvider } from "./Components/Utilities/Reducers/AuthReducer";
import { ProjectProvider } from "./Components/Utilities/Reducers/ProjectReducer";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ProjectProvider>
            <ProfileProvider>
              <MainPage />
            </ProfileProvider>
          </ProjectProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
