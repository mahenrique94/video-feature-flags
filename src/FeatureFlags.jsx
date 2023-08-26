import { createContext, useContext, useState, useEffect } from 'react'

const FeatureFlagsContext = createContext({ featureFlags: {} })

const FeatureFlags = ({ children }) => {
  const [featureFlags, setFeatureFlags] = useState({})

  useEffect(() => {
    setFeatureFlags({
      'save-todo': true,
      'delete-todo': true,
      'update-todo': true
    })
  }, [])

  return (
    <FeatureFlagsContext.Provider value={{ featureFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}

const useFeatureFlags = (...features) => {
  const { featureFlags } = useContext(FeatureFlagsContext)
  return features.every(feature => Boolean(featureFlags[feature]))
}

export { useFeatureFlags }
export default FeatureFlags
