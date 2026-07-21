import React, { useContext } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FriendContext } from '../../context/FriendContext';


const StatsPage = () => {
  const { checkIns } = useContext(FriendContext);


  const textCount = checkIns.filter((item) => item.type === 'Text').length;
  const callCount = checkIns.filter((item) => item.type === 'Call').length;
  const videoCount = checkIns.filter((item) => item.type === 'Video').length;

  
  const data = [
    { name: 'Text', value: textCount, color: '#8b5cf6' },  
    { name: 'Call', value: callCount, color: '#22543d' },  
    { name: 'Video', value: videoCount, color: '#34d399' } 
  ];

 
  const hasData = textCount > 0 || callCount > 0 || videoCount > 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-5xl font-bold text-[#1F2937] mb-6">Friendship Analytics</h1>

    
      <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
        <h2 className="text-[20px] font-semibold text-[#1e463a] mb-4">By Interaction Type</h2>

        {hasData ? (
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={65} 
                  outerRadius={95}
                  paddingAngle={5} 
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend 
                  verticalAlign="bottom" 
                  align="center" 
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => <span className="text-slate-600 text-xs font-medium ml-1 mr-4">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="h-[250px] flex items-center justify-center text-slate-400 text-sm">
            No check-ins logged yet to display analytics.
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;