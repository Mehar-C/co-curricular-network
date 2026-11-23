import { useState } from 'react'
import { JoinHeroPicker } from './join/JoinHeroPicker'
import { TeamsTabs } from './join/TeamsTabs'
import { WhatYouGetSection } from './join/WhatYouGetSection'
import { HowToApplySection } from './join/HowToApplySection'
import { ApplyModal } from '../ui/ApplyModal'
import { teamsData } from '../../data/content'

export function JoinPage() {
  const [selectedTeamId, setSelectedTeamId] = useState(teamsData[0].id)
  const [modalOpen, setModalOpen] = useState(false)
  const [applyingTeamName, setApplyingTeamName] = useState(teamsData[0].name)

  const handleApplyForTeam = (teamName: string) => {
    setApplyingTeamName(teamName)
    setModalOpen(true)
  }

  const handleOpenGeneralApply = () => {
    const team = teamsData.find((t) => t.id === selectedTeamId)
    setApplyingTeamName(team ? team.name : 'Research')
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen">
      <JoinHeroPicker
        selectedTeamId={selectedTeamId}
        onSelectTeam={setSelectedTeamId}
      />
      <TeamsTabs
        selectedTeamId={selectedTeamId}
        onSelectTeam={setSelectedTeamId}
        onApplyForTeam={handleApplyForTeam}
      />
      <WhatYouGetSection />
      <HowToApplySection onOpenApply={handleOpenGeneralApply} />

      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialTeam={applyingTeamName}
      />
    </div>
  )
}

